const path = require('path');
const Mocha = require('mocha');
const fs = require('fs');
const utility = require('../lib/utility');

if (process.env.NODE_ENV !== 'test') {
  utility.log('Test script does not run in a non-test environment');
  process.exit(1);
}

const getTestFilePaths = (dir, fileList) => {
  const files = fs.readdirSync(dir);
  let newFileList = fileList || [];

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      newFileList = getTestFilePaths(path.join(dir, file), newFileList);
    } else {
      newFileList.push(path.join(dir, file));
    }
  });

  return newFileList.filter((file) => path.extname(file) === '.js');
};

(async function runTests(dir = 'test') {
  const mocha = new Mocha({});
  await getTestFilePaths(dir).forEach((file) => {
    if (file !== 'runner') {
      mocha.addFile(
        path.join(file),
      );
    }
  });
  mocha.run()
    .on('fail', (error) => {
      utility.log(error.err);
      process.exit(1);
    })
    .on('end', () => {
      utility.log('Tests passed');
    });
}());
