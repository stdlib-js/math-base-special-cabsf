/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Complex64 } from '@stdlib/types/complex';

/**
* Computes the absolute value of a single-precision complex floating-point number.
*
* ## Notes
*
* -   The absolute value of a complex number is its distance from zero.
*
* @param z - complex number
* @returns absolute value
*
* @example
* var Complex64 = require( '@stdlib/complex-float32' );
*
* var v = cabsf( new Complex64( 5.0, 3.0 ) );
* // returns ~5.83
*/
declare function cabsf( z: Complex64 ): number;


// EXPORTS //

export = cabsf;