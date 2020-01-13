const format = require('nanoid/generate');
const zero = BigInt(0);
const shift = BigInt(8);
const bigShift = BigInt(16);
const byte = BigInt(255);

/**
 * @param {user IP:user Info} str
 * @return {binary}
 */
function unicodeToBinary(str) {
  str = format(str, 8);
  const len = str.length;
  let n = zero;
  for (let i = 0; i < len; i++) {
    const bits = BigInt(str.codePointAt(i));
    n = (n << (bits > byte ? bigShift : shift)) + bits;
  }
  const bin = n.toString(2);
  return bin.padStart(8 * Math.ceil(bin.length / 8), 0);
}

/**
 * @param bytes
 */
function bytesToBigInt(bytes) {
  const high =
    bytes[0] * 2 ** 24 + bytes[1] * 2 ** 16 + bytes[2] * 2 ** 8 + bytes[3];
  const low =
    bytes[4] * 2 ** 24 + bytes[5] * 2 ** 16 + bytes[6] * 2 ** 8 + bytes[7];

  return (BigInt(high) << BigInt(32)) + BigInt(low);
}

/**
 *
 * @param {Uint8Array} key 8 bytes
 * @param {number} buckets
 *
 * @return {number} Bucket from `[0, buckets]` range
 */
function jumpConsistentHash(key, buckets) {
  let strToArr = unicodeToBinary(key);
  let keyBigInt = bytesToBigInt(strToArr);
  let b = BigInt(-1);
  let j = BigInt(0);
  while (j < buckets) {
    b = j;
    keyBigInt =
      ((keyBigInt * BigInt(2862933555777941757)) % BigInt(2) ** BigInt(64)) +
      BigInt(1);
    j = BigInt(
      Math.floor(
        ((Number(b) + 1) * Number(BigInt(1) << BigInt(31))) /
          Number((keyBigInt >> BigInt(33)) + BigInt(1))
      )
    );
  }
  return Number(b);
}

module.exports = { unicodeToBinary, bytesToBigInt, jumpConsistentHash };
