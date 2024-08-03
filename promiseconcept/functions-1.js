function f1(){
    console.log("i m in f1");
}
function f2(){
    setTimeout(function(){
        console.log("I m in f2");
    },5000);
}
function f3(){
    console.log('I m in f3...')
}

f1();
f2();
f3();