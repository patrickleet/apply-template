const Promise = require('bluebird'),
      prompt = Promise.promisify(require('promptly').prompt),
      co = require('co')

module.exports = function *(templateVariables = []) {
  let inputMap = {}

  if (typeof templateVariables !== 'object') {
    console.log('not an object, therefore not an array')
    throw new Error('input should be an Array')
  }

  if (typeof templateVariables.length !== 'number') {
    console.log('no length, not an array')
    throw new Error('input should be an Array')
  }

  for (let templateVariable of templateVariables) {
    inputMap[templateVariable] = yield prompt(`Enter a value for '${templateVariable}':`)
  }

  return inputMap;
}