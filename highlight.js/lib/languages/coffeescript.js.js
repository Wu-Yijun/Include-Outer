function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/coffeescript" instead of "highlight.js/lib/languages/coffeescript.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./coffeescript.js'); */
export default require('./coffeescript.js');