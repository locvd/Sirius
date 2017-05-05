import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import Initialize from './imports/js/plugins';

import './main.html';

Meteor.startup(function () {
  AutoForm.setDefaultTemplate('materialize');
  Initialize();
});
