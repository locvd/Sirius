/**
 * Created by locvd on 2017/04/23.
 */
import SiriusMemberSchema from '../schema/SiriusMemberSchema';
import ActivityType from "../../enum/ActivityType";

SiriusMembers = new Meteor.Collection('siriusMembers');

SiriusMembers.attachSchema(SiriusMemberSchema);

SiriusMembers.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

Meteor.methods({
  insertNewMember: function (member) {
    let lastActivity = SiriusActivities.findOne({}, {sort: {createdTime: -1, limit: 1}});
    let lastMemberCode = 1;
    if (lastActivity) {
      lastMemberCode = lastActivity.lastMemberCode + 1;
    }
    member.memberCode = lastMemberCode;
    let vm = this;
    console.log(member);
    SiriusMembers.insert(member, function () {
      let options = {
        activityType: ActivityType.INSERT,
        userId: vm.userId,
        lastMemberCode: lastMemberCode,
        members: [member]
      };
      Meteor.call("insertNewActivity", options, function (err, res) {
        console.log(err);
        console.log(res);
      });
    });
  }
});