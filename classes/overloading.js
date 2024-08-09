class A{
    demo(){
        console.log("hello")
    }
    demo(name){
        console.log("hello : ",name)
    }
}

const a1 = new A();
a1.demo('sayaji');
a1.demo();