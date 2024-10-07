//
// function demo(){
//
// }

// function demo(a){
//     console.log(a)
// }

// function demo(a){
//     return a;
// }

// console.log(demo(1));
// demo();
// console.log(a)
//
// print();
// const print=function(){
//     console.log("print function")
// }
// function  demo(){
//     console.log('demo')
// }
//
// var a=10;


function add(a,b){
    console.log(a + b);
}
function sub(a,b){
    console.log(a-b)
}

function calculate(a,b,cal){
    console.log(a,b);
    cal(a,b);
}

calculate(1,2,add);
calculate(1,2,sub);





