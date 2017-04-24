const findTemplateVariables = require('findTemplateVariables')

describe('lib/findTemplateVariables', () => {
  it('should exist', () => {
    expect(findTemplateVariables).toBeDefined();
  })

  it('should export a default function', () => {
    expect(typeof findTemplateVariables).toBe('function')
  })

  it('should only accept a string as a parameter', () => {
    expect(() => {
      findTemplateVariables(1)
    }).toThrow()

    expect(() => {
      findTemplateVariables(undefined)
    }).toThrow()

    expect(() => {
      return findTemplateVariables("hello")
    }).not.toThrow()
  })

  it('should return an array', () => {
    let templateVars = findTemplateVariables("hello")
    expect(templateVars.length).toBeDefined()
  })

  it('should return deduped variables found in string in array', () => {
    let templateVars = findTemplateVariables("hello {[NAME]}, {[NAME]}")
    expect(templateVars.length).toBe(1)
    expect(templateVars[0]).toBe('NAME')
  })
})