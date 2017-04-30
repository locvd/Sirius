/**
 * Created by locvd on 2017/04/29.
 */
import SiriusMemberSchema from '../../lib/collections/schema/SiriusMemberSchema';

Template.AddMemberForm.onRendered(function () {
});

Template.AddMemberForm.onCreated(function () {
  TAPi18n.setLanguage('vi');
});

Template.AddMemberForm.helpers({
  inputType: function (obj) {
    return AutoForm.getInputType(obj);
  },
  isObjectField: function (obj) {
    return AutoForm.getInputType(obj)
  }
});