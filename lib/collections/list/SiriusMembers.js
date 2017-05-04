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

Meteor.methods({
  [SiriusMethod.MEMBER_INSERT]: function (member) {
    let lastActivity = SiriusActivities.findOne({}, {sort: {createdTime: -1, limit: 1}});
    let lastMemberCode = 1;
    if (lastActivity) {
      lastMemberCode = lastActivity.lastMemberCode + 1;
    }
    member.memberCode = lastMemberCode;
    let vm = this;
    console.log("Inserting member with memberCode = " + lastMemberCode);
    SiriusMembers.insert(member, function () {
      let options = {
        activityType: ActivityType.INSERT,
        userId: vm.userId,
        lastMemberCode: lastMemberCode,
        members: [member]
      };
      Meteor.call(SiriusMethod.ACTIVIT_INSERT, options, function (err, res) {
        if (err) {
          //Handle error here
        }
        if (res) {
          // handle result here
        }
      });
    });
  }
});