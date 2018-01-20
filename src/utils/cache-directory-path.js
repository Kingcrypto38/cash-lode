const fs = require('fs');
const path = require('path');

module.exports = function cacheDirectoryPath(context, cacheDirectory) {
  const cachePath = path.join(context, cacheDirectory);

  if (!fs.existsSync(cachePath)) {
    fs.mkdirSync(cachePath);
  }

  return cachePath;
}
