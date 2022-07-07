<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# cabsf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [absolute value][absolute-value] of a single-precision [complex][@stdlib/complex/float32] floating-point number.

<section class="intro">

The [absolute value][absolute-value] of a [complex][@stdlib/complex/float32] number is defined as

<!-- <equation class="equation" label="eq:absolute_value_complex" align="center" raw="|a + bi| = \sqrt{a^2 + b^2}" alt="Absolute value"> -->

<div class="equation" align="center" data-raw-text="|a + bi| = \sqrt{a^2 + b^2}" data-equation="eq:absolute_value_complex">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@462b40597988f604d5c05a46279cbb16105a24d3/lib/node_modules/@stdlib/math/base/special/cabsf/docs/img/equation_absolute_value_complex.svg" alt="Absolute value">
    <br>
</div>

<!-- </equation> -->

which corresponds to the length of a vector from the origin to a complex value plotted in the complex plane.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cabsf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cabsf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cabsf = require( 'path/to/vendor/umd/math-base-special-cabsf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cabsf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cabsf;
})();
</script>
```

#### cabsf( z )

Computes an [absolute value][absolute-value] of a single-precision [complex][@stdlib/complex/float32] floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex-float32' );

var y = cabsf( new Complex64( 5.0, 3.0 ) );
// returns ~5.83
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var cabsf = require( '@stdlib/math-base-special-cabsf' );

// Create a PRNG to generate uniformly distributed pseudorandom integers:
var rand = discreteUniform( -50, 50 );

// Compute the absolute value for a set of random numbers...
var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex64( rand(), rand() );
    console.log( 'cabsf(%s) = %d', z.toString(), cabsf( z ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cabsf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cabsf

[test-image]: https://github.com/stdlib-js/math-base-special-cabsf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cabsf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cabsf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cabsf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cabsf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cabsf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cabsf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cabsf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cabsf/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cabsf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cabsf/main/LICENSE

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32/tree/umd

</section>

<!-- /.links -->
