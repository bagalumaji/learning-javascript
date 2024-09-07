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

    display(name){
        console.log("hello from B", name);
    }
}
class C extends B{
    constructor() {
        console.log("constructor - class C");
        super();
    }
    display(){
        console.log("hello from C")
    }
    print(){
        super.display("sharu")
        console.log("hello from C")
    }
}

const c = new C();
c.print();
c.display("hello")
c.show();