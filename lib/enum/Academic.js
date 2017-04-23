/**
 * Created by locvd on 2017/04/23.
 */
var levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var labels = function () {
  var result = [];
  levels.forEach(function (level) {
    result.push({
      label: function () {
        return TAPi18n.__('SiriusMemberSchema.Academic.' + level);
      }, value: level
    })
  });
  return result;
};

var Academic = {
  levels: levels,
  labels: labels()
};

export default Academic;