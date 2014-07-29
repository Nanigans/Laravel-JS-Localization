/*!
 *  Lang.js for Laravel localization in JavaScript.
 *
 *  @version 1.0.2
 *  @license MIT
 *  @site    https://github.com/rmariuzzo/Laravel-JS-Localization
 *  @author  rmariuzzo
 */

'use strict';

(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD support.
    define([], new(factory())());
  } else if (typeof exports === 'object') {
    // NodeJS support.
    module.exports = new(factory())();
  } else {
    // Browser global support.
    root.Lang = new(factory())();
  }

}(this, function() {

  '{ langjs }';

  Lang.prototype.messages = '{ messages }';

  return Lang;

}));
