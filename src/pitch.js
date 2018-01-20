const md5 = require('md5');
const path = require('path');

const getCachePath = require('./utils/cache-directory-path.js');

module.exports = function pitch(modulePath) {
  const cachePath = getCachePath(this.options.context, this.query.cacheDirectory);

  const cachedFileNames = this.fs.fileSystem.readdirSync(cachePath);

  // Normally, there already exists a map for each resource to its hashed key.
  // However, first version will compute hash.
  const fileContent = this.fs.fileSystem.readFileSync(this.resourcePath);
  const fileKey = md5(fileContent);
  console.log('Looking up in cache', this.resourcePath, 'as', fileKey);

  if (cachedFileNames.includes(fileKey)) {
    const cachedFilePath = path.join(cachePath, fileKey);
    const cachedFileContent = this.fs.fileSystem.readFileSync(cachedFilePath);
    console.log('Found in cache: ', cachedFileContent.toString());
    return JSON.parse(cachedFileContent).source;
  } else {
    console.log('Did not find in cache.');
    return;
  }
}
