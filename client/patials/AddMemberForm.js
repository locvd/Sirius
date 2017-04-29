/**
 * Created by locvd on 2017/04/29.
 */
import SiriusMemberSchema from '../../lib/collections/schema/SiriusMemberSchema';

Template.AddMemberForm.onRendered(function () {
  // jQuery('.panel-default .panel-body .form-group').attr('class','form-group col s12 m6 l6');
});

Template.AddMemberForm.onCreated(function () {
  TAPi18n.setLanguage('vi');
});