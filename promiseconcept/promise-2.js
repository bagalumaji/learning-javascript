function f1(){
    return "I m in f1";
}
async function f2(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("I m in f2")},15000);
    });
}
function f3(){
    return 'I m in f3';
}

const f1Result = f1();
console.log(f1Result);
const f2Result=await f2();
console.log(f2Result);

const f3Result=f3();
console.log(f3Result);
