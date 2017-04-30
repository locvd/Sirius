import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import SiriusUserSchema from '../lib/collections/schema/SiriusUserSchema';


import './main.html';

Meteor.startup(function () {
  AutoForm.setDefaultTemplate('materialize');
});