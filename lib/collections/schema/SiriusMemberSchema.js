/**
 * Created by locvd on 2017/04/22.
 */
import SimpleSchema from "simpl-schema";
import Academic from "../../enum/Academic";
import Language from "../../enum/Language";
import Ocupation from "../../enum/Ocupation";
import Marriage from "../../enum/Marriage";

SimpleSchema.extendOptions(['autoform']);

let SiriusMemberSchema = new SimpleSchema({
  memberCode: {
    type: Number,
    optional: true,
    defaultValue: 0,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.memberCode')
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
  "basicInformation.address": {
    type: String,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Address')
    }
  },
  "basicInformation.email": {
    type: String,
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.Email')
    },
    regEx: SimpleSchema.RegEx.Email
  },
  "basicInformation.phone": {
    type: String,
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.basicInformation.TEL')
    },
    regEx: /^[\\+0]\d{9}\d*$/
  },
  language: {
    type: Object,
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Language.label');
    }
  },
  "language.english": {
    type: Number,
    optional: true,
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
    optional: true,
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
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.label');
    }
  },
  "family.father": {
    type: Object,
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Father.label')
    }
  },
  "family.father.age": {
    type: Number,
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Father.age')
    }
  },
  "family.father.ocupation": {
    type: Number,
    optional: true,
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
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Mother.label')
    }
  },
  "family.mother.age": {
    type: Number,
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Mother.age')
    }
  },
  "family.mother.ocupation": {
    type: Number,
    optional: true,
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
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Siblings')
    }
  },
  "family.self": {
    type: Number,
    optional: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Family.Self')
    }
  },
  profile: {
    type: Object,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Profile.label')
    }
  },
  "profile.publish": {
    type: Boolean,
    defaultValue: true,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Profile.publish')
    }
  },
  "profile.retire": {
    type: Boolean,
    defaultValue: false,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Profile.retire')
    }
  }
});

export default SiriusMemberSchema