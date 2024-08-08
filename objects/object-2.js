
//new
const person1 = new Object();
// console.log(person)
person1.name = "abc";
person1.age = 22;
person1.mobile = [11111, 55555];
person1.greeting = () => {
    console.log("hello");
}
person1.address = {
    city: 'pune',
    pincode: 1111
};

// console.log(person);

function add(a, b) {
    console.log(a + b);
}

// constructor function

function Obj(name, age) {
    this.name = name;
    this.age = age;
}

const obj1 = new Obj('abc', 55);
const obj2 = new Obj('xyz', 44);

obj2.city = 'pune';
console.log(obj1)
console.log(obj2)

function Person(name, age, isStudent, address, subjects, greeting) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
    this.address = address;
    this.subjects = subjects;
    this.greeting = greeting;
    //this.k='demo value'
}
const address = { city: 'pune' }

function hello() {
    console.log('hello....')
}

const p1 = new Person('A', 10, false, address, ["E", "T"], hello);

for (let k in p1) {
    if (p1.hasOwnProperty(k)) {
        console.log(k + " is present");
    } else {
        console.log(k + " is not present");

    }
    console.log(p1[k])
}

// abcedr