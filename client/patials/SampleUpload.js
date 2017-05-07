/**
 * Created by locvd on 2017/05/04.
 */

import {ReactiveVar} from 'meteor/reactive-var';

Template.uploadedFiles.onRendered(function () {
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

Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find();
  }
});

Template.uploadForm.onCreated(function () {
  this.filesToUpload = new ReactiveVar([]);
  this.uploads = {};
});

Template.uploadForm.helpers({
  uploadInstance: function (file) {
    return Template.instance().uploads[file.name].get();
  },
  filesToUpload: function () {
    return Template.instance().filesToUpload.get();
  }
});

Template.uploadForm.events({
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
              console.log(fileObj);
            }
            template.uploads[file.name].set(false);
          });

          uploadInstance.start();
        }
      });
    }
  }
});