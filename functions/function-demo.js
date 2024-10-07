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

//
// function add(a,b){
//     console.log(a + b);
// }
// function sub(a,b){
//     console.log(a-b)
// }
//
// function calculate(a,cal){
//     console.log(a,b);
//     cal(a,b);
// }
//
// calculate(1,2,add);
// calculate(1,2,sub);

// const demo =()=>{
//     console.log("demo")}

// const demo = str => console.log(`hello ${str}`);
// const demo = str => `hello ${str}`;
//
// console.log(demo("java script"));
// const person ={
//     name:"abc",
//     greet(){return this.name}
// }
// console.log(person.greet());


// (function demo(){
//     console.log("demo-1");
// })()

function cal(a){
    return function (b){
        return a*b;
    }
}

const cal1 = cal(10);

console.log(cal1(5));


