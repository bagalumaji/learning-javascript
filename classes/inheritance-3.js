
class Demo{
    constructor(id) {
        this.id=id;
        console.log("Demo constructor")
    }
    display(){
        console.log(`Id : ${this.id}`)
    }
}
class Abc extends Demo{
    constructor(id, name) {
       super(id);
        this.name=name;
        console.log("Abc constructor")
    }
    show(){
        console.log(`Details : ${this.name}`)
    }
}

const obj = new Abc(1,"Sayaji");
obj.display();
obj.show();