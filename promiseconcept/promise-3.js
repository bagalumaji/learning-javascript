function f1(){
    console.log('I m in f1');
}
async function lowerToUpperCase(str){
    return str.toUpperCase();
}

function f2(){
    console.log('i m in f2');
}
f1();
const toUpperCase = await lowerToUpperCase("sayajiraje")
console.log(toUpperCase)
f2();

