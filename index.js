/**
 * Module dependencies.
 */

var classes = require('classes')
  , event = require('event')

/**
 * Toggle .onload and .preload classes based on the state of `el`.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api public
 */

module.exports = function(el, fn){
  var c = classes(el);

  // cached images
  if (el.complete) {
    c.add('onload');
    return;
  }

  c.add('preload');
  event.bind(el, 'load', function(){
    c.remove('preload');
    c.add('onload');
    fn && fn();
  });
};
