const findTemplateVariables = require('./findTemplateVariables'),
      fs = require('fs');

// Modifies Array.prototype to have `concatAll`
require('concatAll');

var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

module.exports = function (templateFiles) {

  if (typeof templateFiles !== 'object' && typeof templateFiles.length >= 0) {
    throw new Error('input should be an Array')
  }

  let resultsBeforeDedupe = templateFiles.reduce((templateVariables, file) => {
    let fileString = fs.readFileSync(file, "utf-8")
    templateVariables.push((findTemplateVariables(fileString)));
    return templateVariables
  }, []).concatAll()

  return uniqEs6(resultsBeforeDedupe)
}
