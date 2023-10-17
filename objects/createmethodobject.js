const Person = {
  display() {
    console.log(`name : ${this.name}`);
  },
};
const person = Object.create(Person);
person.name = "sayaji";
person.display();
