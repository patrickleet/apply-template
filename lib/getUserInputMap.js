const debug = require('debug')('template')
const Promise = require('bluebird')
const co = require('co')

const prompt = Promise.promisify(require('promptly').prompt)

module.exports = function *(templateVariables = []) {
  let inputMap = {}

  debug('getting user input')

  if (typeof templateVariables !== 'object') {
    console.log('not an object, therefore not an array')
    throw new Error('input should be an Array')
  }

  if (typeof templateVariables.length !== 'number') {
    console.log('no length, not an array')
    throw new Error('input should be an Array')
  }

  for (let templateVariable of templateVariables) {
    debug(`asking for input for ${templateVariable}`)
    inputMap[templateVariable] = yield prompt(`Enter a value for '${templateVariable}':`)
    debug(`received input ${inputMap[templateVariable]}`)
  }

  return inputMap;
}