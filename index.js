
/**
 * Module dependencies.
 */

var classes = require('classes')
  , event = require('event')

/**
 * Add `classname` class to `el` when loaded.
 *
 * @param {Element} el
 * @param {String} [classname]
 * @api public
 */

module.exports = function(el, classname){
  classname = classname || 'onload';
  event.bind(el, 'load', function(){
    classes(el).add(classname);
  });
};
