/**
 * Created by locvd on 2017/05/03.
 */

import SimpleSchema from "simpl-schema";
import ActivityType from "../../enum/ActivityType";
SimpleSchema.extendOptions(['autoform']);

let SiriusActivitySchema = new SimpleSchema({
  activityType: {
    type: String,
    // allowedValues: ActivityType.allowedValues,
    label: function () {
      return TAPi18n.__('SiriusActivitySchema.activityType')
    }
  },
  userId: {
    type: String,
    label: function () {
      return TAPi18n.__('SiriusActivitySchema.userId')
    }
  },
  memberIds: {
    type: Array,
    label: function () {
      TAPi18n.__('SiriusActivitySchema.memberList')
    }
  },
  "memberIds.$": {
    type: String
  },
  createdTime: {
    type: String,
    label: function () {
      TAPi18n.__('SiriusActivitySchema.createdTime')
    }
  },
  lastMemberCode: {
    type: Number,
    label: function () {
      TAPi18n.__('SiriusActivitySchema.lastMemberCode')
    }
  }
});

export default SiriusActivitySchema;