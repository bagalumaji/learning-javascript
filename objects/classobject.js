class Employee {
  #name;
  #id;

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  set id(id) {
    this.#id = id;
  }

  getDetails() {
    return `Your id ${this.#id} and name is ${this.#name}`;
  }
}

const employee = new Employee();
employee.id = 1;
employee.name = "sharu";
console.log("Details : ", employee.getDetails());
