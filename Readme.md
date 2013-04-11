
# onload

  Add onload transitions to DOM elements that
  emit "load" events such as images by adding
  ".preload" and ".onload" classnames accordingly.

## Installation

    $ component install component/onload

## Example

 Example js:

```js
var onload = require('onload');
var img = document.querySelector('img');
onload(img);
```

 Example css:

```css
img {
  opacity: 1;
  -webkit-transition: opacity 300ms;
  -moz-transition: opacity 300ms;
  transition: opacity 300ms;
}

img.preload {
  opacity: 0;
}
```

## API

 - `onload(el)`

## Images

  Images which are `.complete` are immediately
  assigned ".onload" so that effects can be applied
  to non-cached images only.

## License

  MIT
