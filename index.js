
/**
 * Module dependencies.
 */

var classes = require('classes')
  , event = require('event')

/**
 * Add .onload class to `el` when loaded.
 *
 * @param {Element} el
 * @api public
 */

module.exports = function(el){
  event.bind(el, 'load', function(){
    classes(el).add('onload');
  });
};
