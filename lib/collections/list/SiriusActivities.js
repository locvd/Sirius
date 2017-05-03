/**
 * Created by locvd on 2017/05/03.
 */

import SiriusActivitySchema  from "../schema/SiriusActivitySchema";
import {check} from 'meteor/check'

SiriusActivities = new Meteor.Collection('siriusActivities');
SiriusActivities.attachSchema(SiriusActivitySchema);

SiriusActivities.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc) {
    return false;
  },
  remove: function (userid, doc) {
    return false;
  }
});

Meteor.methods({
  insertNewActivity: function (options) {
    let memberIds = [];
    options.members.forEach(function (mem) {
      let member = SiriusMembers.findOne(mem);
      memberIds.push(member._id);
    });
    let activity = {
      activityType: options.activityType,
      userId: options.userId,
      memberIds: memberIds,
      createdTime: new Date(),
      lastMemberCode: options.lastMemberCode
    };
    SiriusActivities.insert(activity, function () {
      console.log("activity insert success");
      console.log(activity);
    })
  }
});