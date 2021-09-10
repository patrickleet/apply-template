const Promise = require('bluebird'),
      recursive = Promise.promisify(require('recursive-readdir')),
      path = require('path'),
      gitignored = require('./gitignored');

const getFilesFromDir = function *(directory) {
  const gitignorePath = path.join(directory, '.gitignore')
  const gitignoredArr = gitignored.getGitignored(gitignorePath)

  return yield recursive(directory, gitignoredArr);
};

module.exports = getFilesFromDir;