/**
 * Created by locvd on 2017/04/23.
 */
import SiriusMemberSchema from '../schema/SiriusMemberSchema'

SiriusMembers = new Meteor.Collection('siriusMembers');

Meteor.startup(function () {
  SiriusMembers.attachSchema(SiriusMemberSchema);
});