// Check if a string is a palindrome.

function isPalindrome1(str) {
  return str === str.split("").reverse().join("");
}

const valid = "aba";
const invalid = "hello";

console.log(isPalindrome1(valid));
console.log(isPalindrome1(invalid));

function isPalindrome2(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString === str;
}

console.log(isPalindrome2(valid));
console.log(isPalindrome2(invalid));
