/**
 * Created by locvd on 2017/04/23.
 */
import SiriusMemberSchema from '../schema/SiriusMemberSchema';
import ActivityType from "../../enum/ActivityType";
import SiriusMethod from "../../enum/SiriusMethods";

SiriusMembers = new Meteor.Collection('siriusMembers');

SiriusMembers.attachSchema(SiriusMemberSchema);

SiriusMembers.allow({
  insert: function (userId, doc) {
    return !!userId;
  },
  update: function (userId, doc) {
    return !!userId;
  },
  remove: function (userId, doc) {
    return !!userId;
  }
});

SiriusMembers.deny({
  insert: function (userId, doc) {
    return !userId;
  },
  update: function (userid, doc) {
    return !userId;
  },
  remove: function (userId, doc) {
    return !userId;
  }
});

Meteor.methods({
  [SiriusMethod.MEMBER_INSERT]: function (profile, callback) {
    let lastActivity = SiriusActivities.findOne({}, {sort: {createdTime: -1, limit: 1}});
    let lastMemberCode = 1;
    if (lastActivity) {
      lastMemberCode = lastActivity.lastMemberCode + 1;
    }
    // let photoFiles = profile.photoFiles;
    // console.log(photoFiles);
    profile.memberCode = lastMemberCode;
    // profile.photoFiles = undefined;
    let vm = this;
    console.log("Inserting member with memberCode = " + lastMemberCode);
    return SiriusMembers.insert(profile, function (err, res) {

      Meteor.call(SiriusMethod.ACTIVIT_INSERT, {
        activityType: ActivityType.INSERT,
        userId: vm.userId,
        lastMemberCode: lastMemberCode,
        members: [profile]
      }, function (err, res) {
        if (err) {
          //Handle error here
        }
        if (res) {
          // handle result here
        }
      });

      if (typeof callback === "function") {
        callback(err, res);
      }
    });
  }
});

Meteor.methods({
  [SiriusMethod.MEMBER_ADD_PHOTO]: function (memberId, photoId, callback) {
    return SiriusMembers.update(memberId, {
      $push: {photos: photoId}
    }, function (err, res) {
      if (typeof callback === "function") {
        callback(err, res);
      }
    });
  }
});