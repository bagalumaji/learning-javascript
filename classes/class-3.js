//static

class Demo{
    constructor(name) {
        this.name=name;
    }
    static display(){
        console.log("hello from display")
    }
    static demo(){
        console.log(`hello : ${this.name}`)
    }
    printName(){
        console.log(`Name : ${this.name}`)
    }
}

Demo.display();
Demo.demo();
const obj = new Demo("Sharannya");
Demo.demo();
obj.printName()


//obj.display(); - it will not work