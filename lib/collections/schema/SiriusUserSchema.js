/**
 * Created by locvd on 2017/04/22.
 */
import SimpleSchema from "simpl-schema";
import Academic from "../../enum/Academic";
import Language from "../../enum/Language";
import Ocupation from "../../enum/Ocupation";
import Marriage from "../../enum/Marriage";
import { Match } from 'meteor/check'

SimpleSchema.extendOptions(['autoform']);
SimpleSchema.extendOptions({
  index: Match.Optional(Match.OneOf(Number, String, Boolean)),
  unique: Match.Optional(Boolean),
  denyInsert: Match.Optional(Boolean),
  denyUpdate: Match.Optional(Boolean)
});

let SiriusUserSchema = new SimpleSchema({
  username: {
    type: String,
    label: function () {
      return TAPi18n.__('AddMember.Username')
    },
    regEx: /^[a-z0-9A-Z_]{6,15}$/,
    unique: true,
    custom: function () {
      if (Meteor.isClient && this.isSet) {
        Meteor.call("accountsIsUsernameAvailable", this.value, function (error, result) {
          if (!result) {
            Meteor.users.simpleSchema().namedContext("createUserForm").addInvalidKeys([{name: "username", type: "notUnique"}]);
          }
        });
      }
    }
  },
  password: {
    type: String,
    label: function () {
      return TAPi18n.__('AddMember.Password')
    },
    min: 8
  },
  confirmPassword: {
    type: String,
    label: function () {
      return TAPi18n.__('AddMember.ConfirmPassword')
    },
    min: 8,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    }
  },
  basicInformation: {
    type: Object,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.label');
    }
  },
  "basicInformation.name": {
    type: String,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Name');
    }
  },
  "basicInformation.birthDate": {
    type: Date,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.BirthDate');
    }
  },
  "basicInformation.height": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Height');
    }
  },
  "basicInformation.weight": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Weight')
    }
  },
  "basicInformation.academicBackground": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Academic.label');
    },
    allowedValues: Academic.values,
    autoform: {
      options: Academic.options,
    }
  },
  "basicInformation.marriage": {
    type: Number,
    defaultValue: 0,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Marriage.label')
    },
    allowedValues: Marriage.values,
    autoform: {
      options: Marriage.options,
    }
  },
  "basicInformation.ocupation": {
    type: Number,
    defaultValue: 0,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Ocupation.label')
    },
    allowedValues: Ocupation.values,
    autoform: {
      options: Ocupation.options,
    }
  },
  "basicInformation.salary": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Salary')
    }
  },
  "basicInformation.address": {
    type: String,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Address')
    }
  },
  "basicInformation.email": {
    type: String,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Email')
    },
    regEx: SimpleSchema.RegEx.Email
  },
  "basicInformation.phone": {
    type: String,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.TEL')
    },
    regEx: /^0\d{9}\d*$/
  },
  language: {
    type: Object,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Language.label');
    }
  },
  "language.english": {
    type: Number,
    defaultValue: 0,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Language.English.label');
    },
    allowedValues: Language.English.values,
    autoform: {
      options: Language.English.options
    }
  },
  "language.japanese": {
    type: Number,
    defaultValue: 0,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Language.Japanese.label');
    },
    allowedValues: Language.Japanese.values,
    autoform: {
      options: Language.Japanese.options
    }
  },
  "family": {
    type: Object,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.label');
    }
  },
  "family.father": {
    type: Object,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Father.label')
    }
  },
  "family.father.age": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Father.age')
    }
  },
  "family.father.ocupation": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Father.ocupation')
    },
    allowedValues: Ocupation.values,
    autoform: {
      options: Ocupation.options
    }
  },
  "family.mother": {
    type: Object,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Mother.label')
    }
  },
  "family.mother.age": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Mother.age')
    }
  },
  "family.mother.ocupation": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Mother.ocupation')
    },
    allowedValues: Ocupation.values,
    autoform: {
      options: Ocupation.options
    }
  },
  "family.siblings": {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Siblings')
    }
  }
});

export default SiriusUserSchema