

//unary  -: 7, -8
//bi : 2+2,3-3
//ter : a?b:c;


//arithmetic operator
// +,-,*,/,%

// 1+2
//

let a=10;
let b=20;
let c = a + b;
console.log("addition : ",c)

c = a-b;
console.log('subtraction : ',c);

c = a * b ;
c = a / b;

// % (modulator) --> remain -> baki
// / --> quo --> bbhaga

//rev , digit

let num = 123;
const d1 = num % 10;//127
num = Math.floor(num / 10); //12

const d2 = num %10; //2
num = Math.floor(num / 10);//1

let d3 = num %10;

// console.log(d1);
// console.log(d2);
// console.log(d3);

// let firstNumber = d1*100 ;
// let secondNuber = d2 * 10;
// let thirdNumber = d3 *1;


// const reverse = firstNumber + secondNuber + thirdNumber;
const reverse = d1 * 100 + d2 * 10 + d3;
//1221
//nitin

console.log("reversed Number : ",reverse);

////nitin

let str="abcde";
// console.log(str.charAt(0));
// console.log(str[0])

// const char1 =str[4];
// const char2 =str[3];
// str[2];
// str[1];
// str[0];

// console.log(char1+char2)

// relational -- boolean
// <
// >
//<=
//>=
//==
//!=
 a=20;
 b=20;

 console.log(a>b);//f

 console.log(a<b);//t

 console.log(a>=b);//f

 console.log(a<=b);//t

 console.log(a==b);//t
 console.log(a!=b);//f