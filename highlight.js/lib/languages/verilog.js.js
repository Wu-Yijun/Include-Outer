function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/verilog" instead of "highlight.js/lib/languages/verilog.js"'
      );
    }
  }
  emitWarning();
    /* module.exports = require('./verilog.js'); */
export default require('./verilog.js');