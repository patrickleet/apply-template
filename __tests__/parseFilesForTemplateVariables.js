const co = require('co'),
      parseFilesForTemplateVariables = require('parseFilesForTemplateVariables'),
      getFilesFromDir = require('getFilesFromDir')

describe('lib/parseFilesForTemplateVariables', () => {
  it('should exist', () => {
    expect(parseFilesForTemplateVariables).toBeDefined();
  })

  it('should export a default function', () => {
    expect(typeof parseFilesForTemplateVariables).toBe('function')
  })

  it('should only accept an array as a parameter', () => {
    expect(() => {
      parseFilesForTemplateVariables(1)
    }).toThrow()

    expect(() => {
      parseFilesForTemplateVariables(undefined)
    }).toThrow()

    expect(() => {
      return parseFilesForTemplateVariables([])
    }).not.toThrow()
  })

  it('should return an array containing template variables from all files in provided array', co.wrap(function *() {
    const testDir = './example-template/';
    let fileNames = yield getFilesFromDir(testDir);

    let templateVariables = parseFilesForTemplateVariables(fileNames)
    expect(templateVariables.length).toBeGreaterThan(0)
  }))

})