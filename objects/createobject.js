// using litersls

const obj = {
  name: "sayaji",
  address: "gadegaon",
  isEmpolyee: false,
};

//
function Person(name, email) {
  this.name = name;
  this.email = email;
}

const person = new Person("sayaji", "sayajibagal@gmail.com");
console.log(person.name);
console.log(person.email);
