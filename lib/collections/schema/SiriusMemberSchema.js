/**
 * Created by locvd on 2017/04/22.
 */
import SimpleSchema from "simpl-schema";
import Academic from "../../enum/Academic";
import Language from "../../enum/Language";

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
    allowedValues: Academic.levels,
    autoform: {
      options: Academic.labels
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
    allowedValues: Language.English.allowedLevels,
    autoform: {
      options: Language.English.levelLabels
    }
  },
  "language.japanese": {
    type: Number,
    defaultValue: 0,
    label: function () {
      return TAPi18n.__('SiriusMemberSchema.Language.Japanese.label');
    },
    allowedValues: Language.Japanese.allowedLevels,
    autoform: {
      options: Language.Japanese.levelLabels
    }
  }
});

export default SiriusMemberSchema