const fs = require('fs')

module.exports.getGitignored = function(gitignorePath) {
  let gitignore
  let gitignored = []

  if (fs.existsSync(gitignorePath)) {
    gitignore = fs.readFileSync(gitignorePath, 'utf-8')
    gitignored = gitignore.split('\n')
  }

  gitignored.push('.git')

  return gitignored
    .filter(entry => entry.indexOf('#') !== 0)
    .filter(entry => entry.length > 0)
}

const gitignoredRegExpString = function(gitignored) {
  return gitignored.reduce((regex, rule, index) => {
    return index === gitignored.length - 1 ? `${regex}${rule})` : `${regex}${rule}|`
  }, '(').replace(/\./g, '\\.')
}
module.exports.gitignoredRegExpString = gitignoredRegExpString

module.exports.gitignoreRegExp = function(gitignored) {
  return new RegExp(gitignoredRegExpString(gitignored), 'g')
}