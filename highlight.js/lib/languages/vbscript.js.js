function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/vbscript" instead of "highlight.js/lib/languages/vbscript.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./vbscript.js'); */
export default require('./vbscript.js');