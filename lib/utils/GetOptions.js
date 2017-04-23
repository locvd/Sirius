function getOptions(path, values) {
  let result = [];
  values.forEach(function (value) {
    result.push({label: function () {return TAPi18n.__(path +'.' + value);}, value: value})
  });
  return result;
}

export default getOptions