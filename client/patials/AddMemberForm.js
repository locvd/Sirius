/**
 * Created by locvd on 2017/04/29.
 */

import SiriusMethod from "../../lib/enum/SiriusMethods";

Template.AddMemberForm.onRendered(function () {
});

Template.AddMemberForm.onCreated(function () {
  TAPi18n.setLanguage('vi');
});

Template.AddMemberForm.helpers({
  memberInsert: SiriusMethod.MEMBER_INSERT
});

Template.AddMemberForm.events({
  'click #memInsertSubmitBtn': function () {
    console.log("Clicked button #memInsertSubmitBtn");
  }
});