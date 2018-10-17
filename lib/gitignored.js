const fs = require('fs')
const log = require('debug')('apply-template')

module.exports.getGitignored = function (gitignorePath) {
  let gitignore
  let gitignored = []

  if (fs.existsSync(gitignorePath)) {
    gitignore = fs.readFileSync(gitignorePath, 'utf-8')
    gitignored = gitignore.split('\n')
  }

  gitignored.push('.git/')

  return gitignored
    .filter(entry => entry.indexOf('#') !== 0)
    .filter(entry => entry.length > 0)
}

const gitignoredRegExpString = function (gitignored) {
  // reduces each rule to a regex string with format (rule|rule2|rule3)
  let masterRegexRule = `${gitignored.reduce((regexAccumulator, rule, index) => {
    let isLastRule = index === gitignored.length - 1
    // let isFile = fs.lstatSync(rule).isFile()  // I would like this to work, unfortunately - it doesn't
    let isDirectory = rule.indexOf('/') === rule.length - 1
    log(`${rule} isDirectory?`, isDirectory)
    let delimeter = isLastRule ? ')' : '|'
    let regexRule = isDirectory ? rule : `${rule}$`

    regexRule = regexRule
      .replace(/\./g, '\\.') // escape .'s
      .replace(/\*/g, '(.+)') // replaces * with (.+) meaning 1 or more of any character

    if (isDirectory) {
      regexRule = `${regexRule.replace(/\//g, '/?')}|${regexRule}(.+)`
    }

    return isLastRule ? `${regexAccumulator}${regexRule}${delimeter}` : `${regexAccumulator}${regexRule}${delimeter}`
  }, '(')}`

  return masterRegexRule
}
module.exports.gitignoredRegExpString = gitignoredRegExpString

module.exports.gitignoreRegExp = function (gitignored) {
  return new RegExp(gitignoredRegExpString(gitignored), 'g')
}
