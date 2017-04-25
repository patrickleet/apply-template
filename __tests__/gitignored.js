const gitignored = require('gitignored')
const path = require('path')

describe('lib/gitignored', () => {
  let arr = gitignored.getGitignored(path.join(process.cwd(), 'example-template', '.gitignore'))
  let regExpStr = gitignored.gitignoredRegExpString(arr);
  let regExp = gitignored.gitignoreRegExp(arr);

  it('.getGitignored() returns an array of entries from a .gitignore file', () => {
    // always includes .git, and shouldn't include comments
    expect(arr.length).toBe(4)
  })

  it('.gitignoredRegExpString() returns a string that is a regexp that matches all entries from array', () => {
    expect(regExpStr).toBe(`(node_modules|\\.DS_Store|(.+)\\.log|\\.git)`)
  })

  it('.gitignoreRegExp() returns a regexp', () => {
    console.log({regExpStr, regExp})
  })
})
