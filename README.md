# `cash-lode`

Saving you a cash-lode by storing expensive loader transformations to disk.

# Caching mechanism

Cache lookup:

- Key is hash of raw file
- Value is cached output of some expensive loader, plus some metadata required by Webpack

The startup phase hashes all the raw files.
The pitch phase utilizes the cache.
The normal phase adds to the cache.

## Using the cache

During the [pitch phase](https://github.com/webpack/webpack/issues/360#issuecomment-49028914),
it checks the cache given a pre-computed hash of the file.
If the hash exists in the cache lookup then it uses its cached data.
Otherwise, it does nothing and allows the normal phase to occur.

## Building the cache

During the normal phase, it is assumed that the file is not cached.
The input data is already transformed by expensive loaders.
This data is cached along with additional metadata required by Webpack
(dependencies, context dependencies, and hash of the raw input file).

# Why is this fast?

- Analogous to `noParse` option for Webpack
- Avoid expensive loader processing (e.g. sass)
