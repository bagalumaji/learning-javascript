

//number
//string
//boolean
//undefined
//null
//synmbol
//BigInt
//object
//array

// false/true

let isLoggedIn=true;
console.log(isLoggedIn)
console.log(typeof isLoggedIn)

let total;
console.log(total)
console.log(typeof total)

let firstName=null;

console.log(firstName)
console.log(typeof firstName)  // bug

let id = Symbol("id");

console.log(typeof id);
console.log(id);

// bigInt
let value=1233456688743232323n;
console.log(typeof value)


// let result = total == 0;
// console.log(result)

// object

let address={
    city:"Pune",
    state:"MH",
    pincode:"411057",
    getCity:function(){
        return this.city;
    }
}

console.log(address);
console.log(typeof address)

//array

const numbers=[1,2,3, address,total,firstName,isLoggedIn];

const pi=3.14;

console.log(typeof numbers)
console.log(numbers);


