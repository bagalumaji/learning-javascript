let a = 10,
  b = 20;

console.log("before swapping : ");
console.log("first number: " + a);
console.log("second number: " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("after swapping : ");
console.log("first number: " + a);
console.log("second number: " + b);
