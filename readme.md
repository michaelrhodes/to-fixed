# to-fixed

Convert a float into a fixed-point number containing *x* positive integers.

[![Build status](https://travis-ci.org/michaelrhodes/to-fixed.svg?branch=master)](https://travis-ci.org/michaelrhodes/to-fixed)

## Install
```sh
$ npm install to-fixed
```

### API
```js
:number < fixed(number, digits)
```

<small>Note that unlike [Number.prototype.toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed), this modules returns a number instead of a string.</small>

### Example
``` js
var fixed = require('to-fixed')

fixed(1.2345, 1)
> 1.2

fixed(0.0000123, 2)
> 0.000012
```

### License
[MIT](http://opensource.org/licenses/MIT)
