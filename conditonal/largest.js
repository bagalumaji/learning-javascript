let a=10;
let b=20;
let c=30;

let largestNumber = a>b?a:b;
console.log("largest : ",largestNumber);

largestNumber  = a>b && a>c ? a: b > c ? b :c ;
console.log("largest : ",largestNumber);
//null,undefined,0,'',NaN,false - falsy
// 1,[],{},"hi",true

// if(a=20){
// console.log("a : ",a)
// }else{
// console.log("else block...")
// }

// if(a>b){
//     if(a>c){
//         console.log(a);
//     }
// }

// if(a>b && a>c){
//     //a
// }else if(b>c){
//     //b
// }else{
//     //c
// }