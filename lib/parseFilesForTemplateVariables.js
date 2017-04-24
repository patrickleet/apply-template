const findTemplateVariables = require('./findTemplateVariables'),
      fs = require('fs');

// Modifies Array.prototype to have `concatAll`
require('concatAll');

module.exports = function (templateFiles) {

  if (typeof templateFiles !== 'object' && typeof templateFiles.length >= 0) {
    throw new Error('input should be an Array')
  }

  return templateFiles.reduce((templateVariables, file) => {
    let fileString = fs.readFileSync(file, "utf-8")
    templateVariables.push((findTemplateVariables(fileString)));
    return templateVariables
  }, []).concatAll()
}
