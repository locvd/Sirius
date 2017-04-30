/**
 * Created by locvd on 2017/04/30.
 */

import AccountFunc from '../../lib/utils/AccountsFunc';

Template.UserLogin.onCreated(function () {
  TAPi18n.setLanguage('ja');
  T9n.setLanguage('ja');
});

Template.UserLogin.onRendered(function () {
});

Template.UserLogin.helpers({
  atDisabled: function() {
    return AccountsTemplates.disabled();
  },
  atClass: function() {
    return AccountsTemplates.disabled() ? 'disabled' : 'active';
  }
});