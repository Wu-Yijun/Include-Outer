function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/leaf" instead of "highlight.js/lib/languages/leaf.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./leaf.js'); */
export default require('./leaf.js');