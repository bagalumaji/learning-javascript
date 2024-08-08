const person = {
    firstName: "Sayaji",
    lastName: "Bagal",
    greeting() {
        return `Hello: ${this.firstName} ${this.lastName}`;
    }
}

console.log(person.greeting());