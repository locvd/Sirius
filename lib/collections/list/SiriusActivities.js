/**
 * Created by locvd on 2017/05/03.
 */

import SiriusActivitySchema  from "../schema/SiriusActivitySchema";
import SiriusMethod from "../../enum/SiriusMethods";

SiriusActivities = new Meteor.Collection('siriusActivities');
SiriusActivities.attachSchema(SiriusActivitySchema);

SiriusActivities.allow({
  insert: function (userId, doc) {
    return !!userId;
  },
  update: function (userId, doc) {
    return !!userId;
  },
  remove: function (userid, doc) {
    return false;
  }
});

Meteor.methods({
  [SiriusMethod.ACTIVIT_INSERT]: function (options) {
    let memberIds = [];

    options.members.forEach(function (mem) {
      let member = SiriusMembers.findOne(mem);
      if (member) {
        memberIds.push(member._id)
      }
    });
    if (memberIds.length === 0) {
      console.log("Cannot find member in the collection");
      return;
    }
    let activity = {
      activityType: options.activityType,
      userId: options.userId,
    };
    let currentTime = new Date();
    let lastActivity = SiriusActivities.findOne(activity, {sort: {createdTime: -1, limit: 1}});

    if (lastActivity && currentTime.toDateString() === new Date(lastActivity.createdTime).toDateString()) {
      // last activity in the same day exist
      console.log("Found existing activity in the same day, adding new memberId to it");
      memberIds.forEach(function (memberId) {
        lastActivity.memberIds.push(memberId);
      });
      lastActivity.createdTime = currentTime;
      lastActivity.lastMemberCode = options.lastMemberCode;
      SiriusActivities.update(lastActivity._id, {
        $set: lastActivity
      }, function () {
        console.log("Added new member to existing activity");
      })
    } else {
      console.log("Existing activity in the same day not found, creating a new one");
      activity.memberIds = memberIds;
      activity.createdTime = currentTime;
      activity.lastMemberCode = options.lastMemberCode;
      SiriusActivities.insert(activity, function () {
        console.log("Activity insert success");
      })
    }
  }
});