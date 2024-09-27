let num='12';
let num1= Number(num);
console.log('num1 : ',typeof num1);

console.log(num+num1);
console.log(num1+num1-num);
console.log(typeof []);
function d(){}
//[] -> string- '' --falsy
// if([]==''){ // ''==' '
//     console.log('true');
    
// }else{
//     console.log('false');
// }

console.log('function d',d());

if(d){ // ''==' '
    console.log('true');
    
}else{
    console.log('false');
}
