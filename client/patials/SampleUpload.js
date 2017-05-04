/**
 * Created by locvd on 2017/05/04.
 */

import {ReactiveVar} from 'meteor/reactive-var';

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
      // We upload only one file, in case
      // there was multiple files selected
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