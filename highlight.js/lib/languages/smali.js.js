function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/smali" instead of "highlight.js/lib/languages/smali.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./smali.js'); */
export default require('./smali.js');