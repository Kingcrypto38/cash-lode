# `cash-lode`

Saving you a cash-lode by storing expensive loader transformations to disk.

# Caching mechanism

Cache lookup:

- Key is hash of file
- Value is cached output of some expensive loader

# Building the cache

When Webpack compiles a file, hash content and look it up in the cache.
If it does exists, use it.
If it does not exist, allow expensive loader to transform it and write to disk.
