const fs = require('fs');
const md5 = require('md5');
const path = require('path');

module.exports = function pitch(modulePath) {
  console.log('Processing', this.resourcePath);
  const cachePath = path.join(this.options.context, this.query.cacheDirectory);

  if (!fs.existsSync(cachePath)) {
    fs.mkdirSync(cachePath);
  }

  const cachedFileNames = this.fs.fileSystem.readdirSync(cachePath);

  // Normally, there already exists a map for each resource to its hashed key.
  // However, first version will compute hash.
  const fileContent = this.fs.fileSystem.readFileSync(this.resourcePath);
  const fileKey = md5(fileContent);

  if (cachedFileNames.includes(fileKey)) {
    const cachedFilePath = path.join(cachePath, fileKey);
    const cachedFileContent = this.fs.fileSystem.readFileSync(cachedFilePath);
    console.log('Found in cache: ', cachedFileContent);
    return cachedFileContent;
  } else {
    console.log('Did not find in cache.');
    return;
  }
}
