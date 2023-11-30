// Creating an object using Object constructor

const obj = new Object();

console.log(obj);
obj.firstName="sharu";
obj.address={
    city:"pandharpur"
};
obj.greeting = function(){
    console.log(`hello, I am ${this.firstName}`);
}
console.log(obj);
obj.greeting();