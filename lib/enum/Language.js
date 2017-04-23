/**
 * Created by locvd on 2017/04/23.
 */

let englishLevels = [0,1,2,3];
let japaneseLevels = [0,1,2,3,4,5];
let levelLabels = function (lang) {
  let result = [];
  let levels = null;
  if (lang === 'English') {
    levels = englishLevels;
  } else {
    levels = japaneseLevels;
  }
  levels.forEach(function (level) {
    result.push({
      label: function () {
        return TAPi18n.__('SiriusMemberSchema.Language.' + lang + '.' + level);
      }, value: level
    })
  });
  return result;
};

let Language = {
  English: {
    allowedLevels: englishLevels,
    levelLabels: levelLabels("English")
  },
  Japanese: {
    allowedLevels: japaneseLevels,
    levelLabels: levelLabels("Japanese")
  }
};

export default Language;