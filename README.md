# Jump Consistent Hash Implementation

[![CircleCI](https://circleci.com/gh/libterty/jump_consistent_hash/tree/master.svg?style=svg)](https://circleci.com/gh/libterty/jump_consistent_hash/tree/master)

## How to install
```
npm install consistent_hashing
```

## How to use
```
const { jumpConsistentHash } = require('consistent_hashing');
const bucket = jumpConsistentHash('0.0.0.0:1:user', 4);
```

## API
Takes a key and total of buckets

* `key` - 8 bytes key
* `total of buckets` - total of buckets your application has
* It will return the bucket