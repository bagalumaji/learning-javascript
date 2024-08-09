
class Student{
    constructor(firstName,lastName,age) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    display(){
        console.log(`firstName : ${this.firstName} lastName: ${this.lastName} and age : ${this.age}`)
    }
}

const student1 = new Student("Abc","Xyz","20");
student1.display();