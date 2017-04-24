const getUserInputMap = require('../lib/getUserInputMap')

describe('lib/getUserInputMap.js', () => {
  it('exists', () => {
    expect(getUserInputMap).toBeDefined()
    console.log(getUserInputMap)
  })

  it('should export a default function', () => {
    expect(typeof getUserInputMap).toBe('function')
  })

})