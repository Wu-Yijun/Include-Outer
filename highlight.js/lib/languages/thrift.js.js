function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/thrift" instead of "highlight.js/lib/languages/thrift.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./thrift.js'); */
export default require('./thrift.js');