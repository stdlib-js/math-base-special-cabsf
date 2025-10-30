# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-10-30)

<section class="features">

### Features

-   [`42aab9b`](https://github.com/stdlib-js/stdlib/commit/42aab9b7f3e2cb90710712f21c7e4d2b613b6a9d) - update `math/base/special/cabsf` to accept stdlib complex numbers [(#3358)](https://github.com/stdlib-js/stdlib/pull/3358)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`42aab9b`](https://github.com/stdlib-js/stdlib/commit/42aab9b7f3e2cb90710712f21c7e4d2b613b6a9d): use stdlib C complex64 dtype

    -   To migrate, users should provide a value having the type `stdlib_complex64_t`, rather than a built-in C99 single-precision complex dtype. This dtype is available via the package `@stdlib/complex-float32/ctor`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#3357](https://github.com/stdlib-js/stdlib/issues/3357)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`736b37a`](https://github.com/stdlib-js/stdlib/commit/736b37a8b66f157532e7cdb334b17e8aa789f3c8) - **chore:** add structured package data for `math/base/special/cabsf` [(#8272)](https://github.com/stdlib-js/stdlib/pull/8272) _(by Nakul Krishnakumar, Athan Reines)_
-   [`630ddb7`](https://github.com/stdlib-js/stdlib/commit/630ddb777824b5f6e501fda6dadf4ce41dccb964) - **test:** replace equal with strictEqual _(by Karan Anand)_
-   [`cbffd97`](https://github.com/stdlib-js/stdlib/commit/cbffd97f717891016aad4475cb076a0c6ca9a17a) - **test:** add tests for C99 edge cases [(#6519)](https://github.com/stdlib-js/stdlib/pull/6519) _(by Karan Anand)_
-   [`a1e230f`](https://github.com/stdlib-js/stdlib/commit/a1e230f29297caa89880e9c194c615a0400fb7bc) - **chore:** clean up cppcheck-suppress comments _(by Karan Anand)_
-   [`42aab9b`](https://github.com/stdlib-js/stdlib/commit/42aab9b7f3e2cb90710712f21c7e4d2b613b6a9d) - **feat:** update `math/base/special/cabsf` to accept stdlib complex numbers [(#3358)](https://github.com/stdlib-js/stdlib/pull/3358) _(by Aayush Khanna, stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Karan Anand
-   Nakul Krishnakumar

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`3a3b1e0`](https://github.com/stdlib-js/stdlib/commit/3a3b1e08f73a54c5ee46d73045805aee0bb1196d) - **docs:** update package URLs [(#2269)](https://github.com/stdlib-js/stdlib/pull/2269) _(by stdlib-bot)_
-   [`8089b88`](https://github.com/stdlib-js/stdlib/commit/8089b886a4d7d89f15abb068b1021d93f9c4f64e) - **docs:** update paths _(by Athan Reines)_
-   [`038b199`](https://github.com/stdlib-js/stdlib/commit/038b199c32842c02cf678e3ae8305a17aacda05e) - **docs:** update paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`215dfe6`](https://github.com/stdlib-js/stdlib/commit/215dfe690670731f044d09c92832081bc99372cc) - **docs:** update links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`b9e414a`](https://github.com/stdlib-js/stdlib/commit/b9e414a8958f7e59ebf824db6923eb6aba0010a0) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`c5da1f9`](https://github.com/stdlib-js/stdlib/commit/c5da1f9a22b1033d40115798acf13a09acf9410d) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

