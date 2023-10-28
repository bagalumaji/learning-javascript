const str = "hello world";
let result = "";
//1st way

for (let index = str.length - 1; index >= 0; index--) {
  result += str.charAt(index);
}

console.log(result);

const str2 = str.split("").reverse().join("").toString();

console.log(str2);
