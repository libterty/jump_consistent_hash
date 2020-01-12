const zero = BigInt(0);
const shift = BigInt(8);
const bigShift = BigInt(16);
const byte = BigInt(255);

/**
 * convert string to binary code
 * @param {user IP:user Info} str
 * @returns {8 bits} bytes
 */
function unicodeToBinary(str) {
  const len = str.length;
  let n = zero;
  for (let i = 0; i < len; i++) {
    const bits = BigInt(str.codePointAt(i));
    n = (n << (bits > byte ? bigShift : shift)) + bits;
  }
  const bin = n.toString(2);
  return bin.padStart(8 * Math.ceil(bin.length / 8), 0);
}

module.exports = { unicodeToBinary };
