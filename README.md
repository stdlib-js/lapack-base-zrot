<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# zrot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a plane rotation with real cosine and complex sine to a pair of double-precision complex floating-point vectors.

<section class="installation">

## Installation

```bash
npm install @stdlib/lapack-base-zrot
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
var zrot = require( '@stdlib/lapack-base-zrot' );
```

#### zrot( N, zx, strideX, zy, strideY, c, s )

Applies a plane rotation with real cosine and complex sine.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot( zx.length, zx, 1, zy, 1, 1.25, s );

var z = zy.get( 0 );
// returns <Complex128>[ ~-1.5, ~0.75 ]

z = zx.get( 0 );
// returns <Complex128>[ ~1.25, ~2.5 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `zx`.
-   **zy**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `zy`.

The `N` and stride parameters determine how values from `zx` and `zy` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot( 2, zx, 2, zy, 2, 1.25, s );

var z = zy.get( 0 );
// returns <Complex128>[ ~-1.5, ~0.75 ]

z = zx.get( 0 );
// returns <Complex128>[ ~1.25, ~2.5 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

// Initial arrays...
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var zy1 = new Complex128Array( zy0.buffer, zy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var s = new Complex128( 0.0, 0.75 );

zrot( 2, zx1, -2, zy1, 1, 1.25, s );

var z = zy0.get( 2 );
// returns <Complex128>[ ~-6.0, ~5.25 ]

z = zx0.get( 3 );
// returns <Complex128>[ ~8.75, ~10.0 ]
```

#### zrot.ndarray( N, zx, strideX, offsetX, zy, strideY, offsetY, c, s )

Applies a plane rotation with real cosine and complex sine using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 1.25, s );

var z = zy.get( 0 );
// returns <Complex128>[ ~-1.5, ~0.75 ]

z = zx.get( 0 );
// returns <Complex128>[ ~1.25, ~2.5 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `zx`.
-   **offsetY**: starting index for `zy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex128( 0.0, 0.75 );

zrot.ndarray( 2, zx, 2, 1, zy, 2, 1, 1.25, s );

var z = zy.get( 3 );
// returns <Complex128>[ ~-6.0, ~5.25 ]

z = zx.get( 1 );
// returns <Complex128>[ ~3.75, ~5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `zx` and `zy` unchanged.
-   `zrot()` corresponds to the [LAPACK][lapack] routine [`zrot`][zrot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var zcopy = require( '@stdlib/blas-base-zcopy' );
var zeros = require( '@stdlib/array-zeros' );
var logEach = require( '@stdlib/console-log-each' );
var zrot = require( '@stdlib/lapack-base-zrot' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var zx = filledarrayBy( 10, 'complex128', rand );
var zxc = zcopy( zx.length, zx, 1, zeros( zx.length, 'complex128' ), 1 );

var zy = filledarrayBy( 10, 'complex128', rand );
var zyc = zcopy( zy.length, zy, 1, zeros( zy.length, 'complex128' ), 1 );

var s = new Complex128( 0.0, 0.75 );

// Apply a plane rotation:
zrot( zx.length, zx, 1, zy, 1, 1.25, s );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', zxc, zyc, zx, zy );
```

</section>

<!-- /.examples -->

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-zrot.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-zrot

[test-image]: https://github.com/stdlib-js/lapack-base-zrot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/lapack-base-zrot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-zrot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-zrot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-zrot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-zrot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-zrot/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-zrot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-zrot/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-zrot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-zrot/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-zrot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-zrot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-zrot/main/LICENSE

[lapack]: http://www.netlib.org/lapack

[zrot]: https://netlib.org/lapack/explore-html/d1/d45/group__rot_gaac9d54e7408105ad6f4c810902e75b7a.html#gaac9d54e7408105ad6f4c810902e75b7a

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
