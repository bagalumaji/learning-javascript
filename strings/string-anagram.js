
let str1 = "hello";
let str2 = "hi"
str1 = str1.split('').sort().join('');
str2 = str2.split('').sort().join('');
console.log(str1);
console.log(str2);
if (str1 === str2) {
    console.log("strings are anagram");
} else {
    console.log("strings are NOT anagram");
}