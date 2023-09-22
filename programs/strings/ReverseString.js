let str = "hello world";

function revsereString(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
}

//revsereString("hello world");

function revsereString1(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    //reversed += str.charAt(i);
  }
  console.log(reversed);
}

function reverseString2(str) {
  return [...str].reduce((acc, char) => char + acc, "");
}

console.log(reverseString2("hello"));
