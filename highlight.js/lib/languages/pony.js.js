function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/pony" instead of "highlight.js/lib/languages/pony.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./pony.js'); */
export default require('./pony.js');