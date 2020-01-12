const chai = require('chai');
const sinon = require('sinon');
const should = chai.should();
const expect = chai.expect;
const { unicodeToBinary } = require('../src/index');

describe('# Jump Consistent Hashing', () => {
  context('# Hashing System', () => {
    describe('When request coming in', () => {
      const user1Request = '127:0.0.1:1:user1';
      const tBuckets = 4;
      let user1Bytes;

      it('should return key bytes when we call the function', () => {
        user1Bytes = unicodeToBinary(user1Request);
        expect(user1Bytes).to.equal(
          '0011000100110010001101110011101000110000001011100011000000101110001100010011101000110001001110100111010101110011011001010111001000110001'
        );
      });
    });
  });
});
