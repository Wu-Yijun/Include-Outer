function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/c" instead of "highlight.js/lib/languages/c.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./c.js'); */
export default require('./c.js');