const Promise = require('bluebird'),
      recursive = Promise.promisify(require('recursive-readdir'));

const getFilesFromDir = function *(directory) {
  return yield recursive(directory, ['.DS_Store', '.git', 'node_modules']);
};

module.exports = getFilesFromDir;