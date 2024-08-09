
class A{
    display(){
        console.log("Hello from A")
    }
}
class B extends A{
    show(){
        console.log("hello from B")
    }
}

const  a1 = new B();
a1.show();
a1.display()