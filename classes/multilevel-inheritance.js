class A{
   show() {
       console.log("show from A")
   }
}
class B extends A{
    display(){
        console.log("hello from B")
    }
}
class C extends B{
    print(){
        console.log("hello from C")
    }
}

const c = new C();
console.log(c);
c.print();
c.display()
c.show();