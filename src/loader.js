const md5 = require('md5');

const getCachePath = require('./utils/cache-directory-path.js');

module.exports = function loader(source) {
  console.log('Caching', this.resourcePath);
  const cachePath = getCachePath(this.options.context, this.query.cacheDirectory);
  const fileKey = md5(fileContent);
};
