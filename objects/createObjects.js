const firstObject={
    firstName:"sayaji",
    isStudent:true,
    mobile:[8275447805,7840979590],
    address:{
        city:"Pandharpur",
        State:"MH"
    },
    greeting:function(){
        console.log(`Hello, I am ${this.firstName} `);
    }
}

console.log(firstObject.firstName);

firstObject.greeting();

console.log(firstObject.address.city);
console.log(firstObject.address['city']);
console.log(firstObject.mobile[0]);
firstObject.gender="male";
console.log(firstObject)