function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/irpf90" instead of "highlight.js/lib/languages/irpf90.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./irpf90.js'); */
export default require('./irpf90.js');