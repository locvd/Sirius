/**
 * Created by locvd on 2017/04/22.
 */
import SimpleSchema from "simpl-schema";
import Academic from "../../enum/Academic";
import Language from "../../enum/Language";
import Ocupation from "../../enum/Ocupation";

SimpleSchema.extendOptions(['autoform']);



SiriusMemberSchema = new SimpleSchema({
  name: {
    type: String,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Name');
    }
  },
  birthDate: {
    type: Date,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.BirthDate');
    }
  },
  height: {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Height');
    }
  },
  academicBackground: {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Academic.label');
    },
    allowedValues: Academic.values,
    autoform: {
      options: Academic.options
    }
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
  ocupation: {
    type: Number,
    defaultValue: 0,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Ocupation.label')
    },
    allowedValues: Ocupation.values,
    autoform: {
      options: Ocupation.options
    }
  },
  siblings: {
    type: Number,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Siblings')
    }
  },
  father: {

  },
  mother: {

  }
});

export default SiriusMemberSchema