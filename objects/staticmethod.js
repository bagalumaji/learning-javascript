const Person = function (name, email) {
  this.name = name;
  this.email = email;
};

Person.display = function () {
  console.log("hello from display");
};

const person = new Person("Sharannya", "sharannyabagal@gmail.com");

//person.display(); not possible

Person.display();

class Demo {
  static show() {
    console.log("hello from show");
  }
}

Demo.show();
