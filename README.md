# Jump Consistent Hash Implementation

[![CircleCI](https://circleci.com/gh/libterty/jump_consistent_hash/tree/master.svg?style=svg)](https://circleci.com/gh/libterty/jump_consistent_hash/tree/master)

- Referencing Jump Consistent Hash which can take user's Info to map a random bucket

## How to install
```
npm install jump-consistent-hash
```

## How to use
```
const { jumpConsistentHash } = require('jump-consistent-hash');
const bucket = jumpConsistentHash('0.0.0.0:1:user', 4);
```

## API
Takes a key and total of buckets

* `key` - address of info you need
* `total of buckets` - total of buckets your application has
* It can return the bucket for example as following
* '127.0.0.1:Roger1231': [
    3, 0, 1, 1,
    0, 0, 0, 1,
    2, 1
  ]
* '194.176.192.172:Albert': [
    2, 1, 1, 0,
    1, 1, 2, 1,
    2, 1
  ]
* '193.168.1.104:Willian': [
    0, 2, 3, 1,
    3, 1, 3, 1,
    2, 1
  ]
* '128.173.192.172:Lillay': [
    2, 0, 1, 1,
    3, 2, 0, 3,
    2, 2
  ]
* '0.0.0.0:Wonka': [
    2, 3, 0, 0,
    2, 0, 0, 0,
    0, 0
  ]