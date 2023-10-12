function isInteger(num) {
  if (typeof num === "number" && num % 1 === 0) {
    return true;
  }
  return false;
}

console.log(isInteger(1));
console.log(isInteger(0.3));
console.log(isInteger(1.2));
console.log(isInteger("1"));
