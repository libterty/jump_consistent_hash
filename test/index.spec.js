const chai = require('chai');
const sinon = require('sinon');
const should = chai.should();
const expect = chai.expect;
const {
  unicodeToBinary,
  bytesToBigInt,
  jumpConsistentHash
} = require('../src/index');

describe('# Jump Consistent Hashing', () => {
  context('# Hashing System', () => {
    describe('When request coming in', () => {
      const request = [
        '127.0.0.1:Roger1231',
        '194.176.192.172:Albert',
        '193.168.1.104:Willian',
        '128.173.192.172:Lillay',
        '0.0.0.0:Wonka'
      ];
      const tBuckets = 4;
      let user1Bytes, user2Bytes;

      it('should return mapping result which will indicate to which bucket', () => {
        let cache = {
          '127.0.0.1:Roger1231': [],
          '194.176.192.172:Albert': [],
          '193.168.1.104:Willian': [],
          '128.173.192.172:Lillay': [],
          '0.0.0.0:Wonka': []
        };
        for (let i = 0; i < 10; i++) {
          request.map(item => {
            const result = jumpConsistentHash(item, tBuckets);
            cache[item].push(result);
          });
        }
        expect(cache['127.0.0.1:Roger1231'].length).to.equal(10);
        expect(cache['127.0.0.1:Roger1231']).to.include(1);
      });
    });
  });
});
