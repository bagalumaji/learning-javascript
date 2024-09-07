class A {
    print() {
        console.log("print A method")
    };
}

class B extends A {
    print() {
        console.log("print B method");
    }
}

class C extends A {
    print() {
        console.log("print C method");
    }
}

const c = new C();
c.print();
