# good-guy-disk-cache
Disk cache implementation for [Good Guy HTTP][good-guy-http].

[![npm version](https://badge.fury.io/js/good-guy-disk-cache.svg)](https://www.npmjs.com/package/good-guy-disk-cache)
[![dependencies](https://img.shields.io/david/good-guy-disk-cache/good-guy-disk-cache.svg)](https://david-dm.org/good-guy-disk-cache/good-guy-disk-cache)
[![dev dependencies](https://img.shields.io/david/dev/good-guy-disk-cache/good-guy-disk-cache.svg)](https://david-dm.org/good-guy-disk-cache/good-guy-disk-cache?type=dev)
[![npm license](https://img.shields.io/npm/l/good-guy-disk-cache.svg?color=blue)](https://github.com/good-guy-disk-cache/good-guy-disk-cache/blob/master/LICENSE)

Cache your HTTP(S) requests like a decent human-being. For use with Good Guy HTTP. Depends on [Async Disk Cache][async-disk-cache].

## Usage

```js
var DiskCache = require("good-guy-disk-cache");
var GoodGuy = require('good-guy-http');

var diskCache = new DiskCache("my-cache");
// 'my-cache' also serves as the global key for the cache.
// if you have multiple programs with this same `cache-key` they will share the
// same backing store. This by design.

var goodGuy = GoodGuy({cache: diskCache});

// this request will get its response cached to disk, will be retried if it
// fails, will be collapsed if you happen to make two of them
goodGuy('http://news.ycombinator.com').then(function(response) {
  console.log(response.body);
});
```

[good-guy-http]: https://www.npmjs.com/package/good-guy-http
[async-disk-cache]: https://www.npmjs.com/package/async-disk-cache
