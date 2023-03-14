//your JS code here. If required.
function byteSize(str) {
  // Use the TextEncoder API to encode the string into bytes
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  // Return the size of the bytes array
  return bytes.length;
}
console.log(byteSize('hello world')); // 11
console.log(byteSize('안녕하세요')); // 15
console.log(byteSize('')); // 0
