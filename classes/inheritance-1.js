
class A{
    display(){
        console.log("display from A")
    }
}
class B extends A{
    display(){
        console.log("display from B")
    }
    show(){
        console.log("show from B")
    }
}

const  b1 = new B();
b1.display();
b1.show();


