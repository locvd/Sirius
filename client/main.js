import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Meteor.startup(function () {
  AutoForm.setDefaultTemplate('materialize');
});