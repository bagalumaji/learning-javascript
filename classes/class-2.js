class Employee{
    constructor(id,name) {
        this._id=id;
        this._name=name;
    }
    set id(id){
        this._id=id;
    }
    get id(){
        return this._id;
    }

    set name(name){this._name=name;}
    get name(){return this._name;}

    set salary(value){
        if(value>0){
            this._salary = value;
        }else{
            this._salary=0;
        }
    }
    get salary(){return this._salary;}

    getDetails(){
        return `ID : ${this.id} Name : ${this.name} and Salary : ${this.salary}`
    }

}

const emp = new Employee(111,"Sayaji");
emp.salary=555555;
console.log(emp.getDetails())