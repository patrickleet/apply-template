const co = require('co'),
      getFilesFromDir = require('getFilesFromDir');

describe('when using getFilesFromDirectory', () => {
  const testDir = './example-template/';

  it('it returns the filenames inside of that directory, as well as the files from the subdirectories as an array', co.wrap(function *() {
    let fileNames = yield getFilesFromDir(testDir);
    expect(fileNames.length).toBe(3)
    expect(fileNames[0]).toContain('.gitignore')
    expect(fileNames[1]).toContain('index.js')
    expect(fileNames[2]).toContain('bin-file')
  }));
});
