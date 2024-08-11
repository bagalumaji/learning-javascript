// 3 Ways to convert String to Numbers
//     .
// +, Number and parseInt.  these three Number() and Unary Plus(+) works exactly same.
//
//     Below are the major differences between Number constructor function and parseInt.
// 1. Number(x) does type coercion to number, while parseInt(x) does parsing.
//
// 2.Number works well with Scientific Numbers
console.log(Number("83e4"));; // 830000
console.log(Number("2e2"));; // 200

console.log(parseInt('4e3'));; // 4

// 3. Empty, Nullish value handling is different.
console.log(Number(""));; // 0
console.log(Number(false));; // 0
console.log(Number(null));; // 0
console.log(Number([]));; // 0

console.log(Number(true));; // 1

console.log(parseInt(""));; // NaN
console.log(parseInt(null));; // NaN
console.log(parseInt(false));; // NaN
console.log(parseInt([]));; // NaN

console.log(parseInt(true));; // NaN

console.log(parseInt(undefined));; // NaN
console.log(parseInt({}));; // NaN

console.log(Number({}));; // NaN

// 4. Number() can’t differentiate different Number System, but parseInt can with radix argument.
console.log(parseInt(10, 8));// Octal conversion - output 8
console.log(parseInt(101, 2));// Binary conversion - output 5

// Similarity:
//     They both also ignore whitespace:
    const foo = "    6  ";
console.log(parseInt(foo)); // 6
console.log(Number(foo)); // 6