function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/smalltalk" instead of "highlight.js/lib/languages/smalltalk.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./smalltalk.js'); */
export default require('./smalltalk.js');