
# onload

  Add onload transitions to DOM elements that
  emit "load" events such as images.

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
  opacity: 0;
  -webkit-transition: opacity 300ms;
  -moz-transition: opacity 300ms;
  transition: opacity 300ms;
}

img.onload {
  opacity: 1;
}
```

## API

 - `onload(el, [classname])`

## License

  MIT
