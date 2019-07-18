export function caesarShift(string, shiftAmount) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    // c is short for character
    let c = string.charCodeAt(i);

    if (65 <= c && c <= 90) {
      // Uppercase
      result += String.fromCharCode(((c - 65 + shiftAmount) % 26) + 65);
    } else if (97 <= c && c <= 122) {
      // Lowercase
      result += String.fromCharCode(((c - 97 + shiftAmount) % 26) + 97);
    } else {
      // Copy
      result += string.charAt(i);
    }
  }
  return result;
}
