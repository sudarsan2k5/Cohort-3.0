// let bytes = new Uint8Array([0, 255, 127, 128]);
// console.log(bytes)

    // String.fromCharCode(72) returns 'H'.
    // String.fromCharCode(101) returns 'e'

    // he map function creates a new array by applying a provided function to each element in the original array.

            // Result of map:

            // You get a new array where each byte has been replaced by its corresponding character.
            // Example:
            // Input byteArray: [72, 101, 108, 108, 111]
            // After map: ['H', 'e', 'l', 'l', 'o']

            // .join('')
            // The join method combines all elements of an array into a single string.

            // Final Result:
            // The array ['H', 'e', 'l', 'l', 'o'] becomes the string 'Hello'.


function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
    }
  
  const bytes = [65, 80, 80, 76, 69];
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString);

