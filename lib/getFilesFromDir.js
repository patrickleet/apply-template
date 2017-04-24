const Promise = require('bluebird'),
      recursive = Promise.promisify(require('recursive-readdir')),
      fs = require('fs'),
      path = require('path');

const getFilesFromDir = function *(directory) {
  const gitignorePath = path.join(directory, '.gitignore')
  let gitignore
  let gitignored = []

  if (fs.existsSync(gitignorePath)) {
    gitignore = fs.readFileSync(gitignorePath, 'utf-8')
    gitignored = gitignore.split('\n')
  }

  console.log(gitignored)

  return yield recursive(directory, ['.git', ...gitignored]);
};

module.exports = getFilesFromDir;