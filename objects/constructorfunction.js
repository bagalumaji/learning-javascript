const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`Name : ${this.firstName} ${this.lastName}`);
  };
};

const person = new Person("Sayaji", "Bagal");
person.fullName();
