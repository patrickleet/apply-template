const Promise = require('bluebird'),
      recursive = Promise.promisify(require('recursive-readdir'));

const getFilesFromDir = function *(directory) {
  return yield recursive(directory, ['.DS_Store', '.git']);
};

module.exports = getFilesFromDir;