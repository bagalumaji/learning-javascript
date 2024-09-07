class A{
   constructor() {
       console.log("constructor - class A");
   }
    show() {
       console.log("show from A")
   }
}
class B extends A{
    constructor() {
        console.log("constructor - class B");
        super()
    }

    display(){
        console.log("hello from B")
    }
}
class C extends B{
    constructor() {
        console.log("constructor - class C");
        super();
    }
    print(){
        console.log("hello from C")
    }
}

const c = new C();
c.print();
c.display()
c.show();