/**
 * Created by locvd on 2017/05/04.
 */

import ActivityType from "../../enum/ActivityType";
import SiriusMethod from "../../enum/SiriusMethods";

Images = new Meteor.Files({
  storagePath: Meteor.settings.public.storagePath,
  debug: false,
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload: function (file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 1024 * 1024 * 10 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});

if (Meteor.isServer) {
  Images.denyClient();
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });

} else {
  Meteor.subscribe('files.images.all');
}

Meteor.methods({
  [SiriusMethod.PHOTOS_UPLOAD]: function (photoFiles, startCallBack, endCallBack) {

    if (endCallBack === undefined) {
      endCallBack = startCallBack;
      startCallBack = undefined;
    }

    for (let i = 0; i < photoFiles.length; i++) {
      let file = photoFiles[i];
      if (file) {
        let uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        if (startCallBack) {
          uploadInstance.on('start', startCallBack);
        } else {
          uploadInstance.on('start');
        }

        if (endCallBack) {
          uploadInstance.on('end', endCallBack);
        } else {
          uploadInstance.on('end');
        }

        uploadInstance.start();
      }
    }

  }
});