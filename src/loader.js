const fs = require('fs');
const md5 = require('md5');
const path = require('path');

const getCachePath = require('./utils/cache-directory-path.js');

module.exports = function loader(source) {
  console.log('Caching', this.resourcePath);
  const cachePath = getCachePath(this.options.context, this.query.cacheDirectory);
  const cachedFileNames = this.fs.fileSystem.readdirSync(cachePath);

  const fileContent = this.fs.fileSystem.readFileSync(this.resourcePath);
  const fileKey = md5(fileContent);

  const cachedFilePath = path.join(cachePath, fileKey);
  const cacheFileContent = JSON.stringify({
    source: source,
  });
  fs.writeFileSync(cachedFilePath, cacheFileContent);

  return source;
};
