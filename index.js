
module.exports = {

  /**
   * Rounds a number to the specified number of significant places
   * @param   {Number} number
   * @param   {Number} places
   * @returns {Number}
   */
  round:  function(number, places) {
    number = Number(number);
    places = typeof(places) === 'number' ? places : 0;

    if (places <= 0) {
      return Math['round'].call(null, number);
    }

    var
      significant     = Math.pow(10, places),
      insignificant   = Number('1e+'+(places+1)),
      decimal         = (((Math['round'].call(null, (number * significant) + insignificant)) - insignificant) / significant);
    ;

    return decimal;
  },

  /**
   * Formats a number
   * @param   {Number} number
   * @param   {Object} options
   * @param   {Number} options
   * @param   {Number} options
   * @returns {String}
   */
  format: function(number, options) {
    options = options || {};

    var formatted;

    if (options.places) {
      formatted = this.round(number, options.places).toFixed(options.places);
    } else {
      formatted = number;
    }
    formatted = formatted.toString();

    if (options.separator) {
      formatted = formatted.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'+options.separator);
    }

    return formatted;
  }

};