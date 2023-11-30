const person = {
    firstName: "sayaji",
    lastName: "bagal",
    age: 30,
    isStudent: true,
    address: {
        city: "Pandharpur",
        zipCode: "413304"
    },
    sayHello: function() {
        console.log("Hello, I'm " + this.firstName + " " + this.lastName);
    }
};

person.sayHello();

const keys = Object.keys(person);

console.log(keys);

const values = Object.values(person);
console.log(values);

/*
Object.freeze(person);
//can be add new property or update
person.email="abc@abc.com";
person.isStudent="sayajirajebagal@gmail.com";
console.log(person);
*/

const entries  = Object.entries(person);
console.log(entries);

const newObj = Object.assign({},person,{gender:"male"});
console.log(newObj);

Object.seal(person);

//we can not add new property but we can update existing
person.firstName="SAYAJI";
console.log(person)