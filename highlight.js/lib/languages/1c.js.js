function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/1c" instead of "highlight.js/lib/languages/1c.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./1c.js'); */
export default require('./1c.js');