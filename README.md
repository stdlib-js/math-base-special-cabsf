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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cabsf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [absolute value][absolute-value] of a single-precision [complex][@stdlib/complex/float32/ctor] floating-point number.

<section class="intro">

The [absolute value][absolute-value] of a [complex][@stdlib/complex/float32/ctor] number is defined as

<!-- <equation class="equation" label="eq:absolute_value_complex" align="center" raw="|a + bi| = \sqrt{a^2 + b^2}" alt="Absolute value"> -->

```math
|a + bi| = \sqrt{a^2 + b^2}
```

<!-- <div class="equation" align="center" data-raw-text="|a + bi| = \sqrt{a^2 + b^2}" data-equation="eq:absolute_value_complex">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@462b40597988f604d5c05a46279cbb16105a24d3/lib/node_modules/@stdlib/math/base/special/cabsf/docs/img/equation_absolute_value_complex.svg" alt="Absolute value">
    <br>
</div> -->

<!-- </equation> -->

which corresponds to the length of a vector from the origin to a complex value plotted in the complex plane.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cabsf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var cabsf = require( '@stdlib/math-base-special-cabsf' );
```

#### cabsf( z )

Computes the [absolute value][absolute-value] of a single-precision [complex][@stdlib/complex/float32/ctor] floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var y = cabsf( new Complex64( 5.0, 3.0 ) );
// returns ~5.83
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
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
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/cabsf.h"
```

#### stdlib_base_cabsf( z )

Computes the [absolute value][absolute-value] of a single-precision complex floating-point number.

```c
#include "stdlib/complex/float32/ctor.h"

stdlib_complex64_t z = stdlib_complex64( 5.0f, 3.0f );

float y = stdlib_base_cabsf( z );
// returns ~5.83f
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.

```c
float stdlib_base_cabsf( const stdlib_complex64_t z );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/cabsf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.0f ),
        stdlib_complex64( -3.14f, -1.0f ),
        stdlib_complex64( 0.0f, 0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    float re;
    float im;
    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cabsf( v );
        stdlib_complex64_reim( v, &re, &im );
        printf( "f(%f + %f) = %f\n", re, im, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cabs`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cabs2f`][@stdlib/math/base/special/cabs2f]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value of a single-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/absf`][@stdlib/math/base/special/absf]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a single-precision floating-point number.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cabsf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-cabsf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-cabsf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-cabsf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-cabsf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-cabsf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-cabsf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cabsf/main/LICENSE

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor

<!-- <related-links> -->

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math-base-special-cabs

[@stdlib/math/base/special/cabs2f]: https://github.com/stdlib-js/math-base-special-cabs2f

[@stdlib/math/base/special/absf]: https://github.com/stdlib-js/math-base-special-absf

<!-- </related-links> -->

</section>

<!-- /.links -->
