const fs = require('fs');

module.exports = function pitch(modulePath) {
  const cachePath = path.join(this.options.context, this.query.cacheDirectory);

  if (!fs.existsSync(cachePath)) {
    fs.mkdirSync(cachePath);
  }

  const cachedFileNames = this.fs.fileSystem.readdirSync(cachePath);
}
