// {}

// //json
const person = {
    firstName: "Abc",
    lastName: "xyz",
    address: "pune"
};
//.
//[]
const ln = "lastName";
console.log(person);
console.log(person.firstName);
console.log(person["lastName"])
console.log(person[ln])

person.city = "temp";

console.log(person);
delete person.city;
console.log(person);

person.address = "Goa";

console.log(person);


const obj = {
    name: "hello",
    age: 11,
    isStudent: true,
    address: {
        city: 'pune',
        pincode: 411057
    },
    subjects: ["EN", "MR"],
    greeting: function () {
        console.log("hello from greeting");
    }
}
const obj1 = {
    name: "hello",
    age: 11,
    isStudent: true,
    address: {
        city: 'pune',
        pincode: 411057
    },
    subjects: ["EN", "MR"],
    greeting: function () {
        console.log("hello from greeting");
    }
}
// console.log(obj)
console.log(obj.address.pincode)
console.log(obj.subjects[1])
obj.greeting();

