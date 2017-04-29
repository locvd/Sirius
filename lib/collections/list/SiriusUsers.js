/**
 * Created by locvd on 2017/04/29.
 */
import SiriusUserSchema from '../schema/SiriusUserSchema'

SiriusUsers = new Meteor.Collection('siriusUsers');

SiriusUsers.attachSchema(SiriusUserSchema);