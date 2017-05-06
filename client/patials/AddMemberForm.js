/**
 * Created by locvd on 2017/04/29.
 */

import SiriusMethod from "../../lib/enum/SiriusMethods";

Template.AddMemberForm.onRendered(function () {

  let link = $('#member-video-link')[0].value;

  if (link) {
    this.videoLink.set(link);
  }

  //popup-gallery
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    fixedContentPos: true,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title');
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    }
  });
});

Template.AddMemberForm.onCreated(function () {
  this.formGroupFields = ["basicInformation.birthDate",
    "basicInformation.academicBackground",
    "basicInformation.marriage",
    "basicInformation.ocupation",
    "language.english",
    "language.japanese",
    "family.father.ocupation",
    "family.mother.ocupation"];
  this.insertDoc = new ReactiveVar(false);
  this.showPhotoUpload = new ReactiveVar(false);
  this.photoFiles = [];
  this.photoDatas = new ReactiveVar([]);
  this.videoLink = new ReactiveVar(false);

  let vm = this;
  let hooksObject = {
    // Called when form does not have a `type` attribute
    // Called when any submit operation succeeds
    onSuccess: function (formType, result) {
      console.log(formType, result);
      // vm.showPhotoUpload.set(true);
    },
    onError: function(formType, error) {
      console.log(formType, error);
    },
    formToDoc: function (doc) {
      return doc;
    },
    before: {
      'method': function (doc) {
        return doc;
      }
    },

    after: {
      'method': function (err, res) {
        console.log(err, res);
      }
    }
  };

  AutoForm.addHooks(['addMember2'], hooksObject);

  TAPi18n.setLanguage('vi');
});

Template.AddMemberForm.helpers({
  memberInsert: SiriusMethod.MEMBER_INSERT,
  classOfGroup: function (field) {
    return "form-group"
  },
  classOfField: function (field) {
    return "";
  },
  showPhotoUpload: function () {
    return Template.instance().showPhotoUpload.get();
  },
  photoDatas: function () {
    return Template.instance().photoDatas.get();
  },
  videoLink: function () {
    return Template.instance().videoLink.get();
  }
});

Template.AddMemberForm.events({
  'click #memInsertSubmitBtn': function () {
  },
  'change #photo-upload-form': function (e, template) {
    if (e.currentTarget.files) {
      let fileList = e.currentTarget.files;
      let files = [];
      let uploads = {};
      let photoDatas = [];

      template.photoDatas.set([]);

      for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i];

        // Only process image files.
        if (!file.type.match('image.*')) {
          continue;
        }
        files.push(file);

        let reader = new FileReader();
        reader.onload = (function (file) {
          return function (e) {
            photoDatas = template.photoDatas.get();
            photoDatas.push({
              data: e.target.result,
              name: file.name
            });
            template.photoDatas.set(photoDatas);
          }
        })(file);
        reader.readAsDataURL(file);
      }

      template.photoFiles = files;
    }
  },
  'change #member-video-link': function (e, template) {
    var matcher = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
    if (matcher.test(e.target.value)) {
      template.videoLink.set(e.target.value);
    } else {
      template.videoLink.set(false);
    }
  }
});

Template.uploadedPhotos.onRendered(function () {

  //popup-gallery
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    fixedContentPos: true,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title');
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    }
  });

});

Template.uploadedPhotos.helpers({
  uploadedFiles: function () {
    return Images.find();
  }
});

Template.photoUploadForm.onCreated(function () {
  this.filesToUpload = new ReactiveVar([]);
  this.uploads = {};
});

Template.photoUploadForm.helpers({
  uploadInstance: function (file) {
    return Template.instance().uploads[file.name].get();
  },
  filesToUpload: function () {
    return Template.instance().filesToUpload.get();
  }
});

Template.photoUploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {

      let fileList = e.currentTarget.files;
      let files = [];
      let uploads = {};
      for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i];
        files.push(file);
        uploads[file.name] = new ReactiveVar(false);
      }

      template.uploads = uploads;
      template.filesToUpload.set(files);

      files.forEach(function (file) {
        if (file) {
          let uploadInstance = Images.insert({
            file: file,
            streams: 'dynamic',
            chunkSize: 'dynamic'
          }, false);

          uploadInstance.on('start', function () {
            template.uploads[file.name].set(this);
          });

          uploadInstance.on('end', function (error, fileObj) {
            if (error) {
              console.log("error uploading");
            } else {
              // console.log(fileObj);
            }
            template.uploads[file.name].set(false);
          });

          uploadInstance.start();
        }
      });
    }
  }
});