//
const user={
    name:"Ramesh",
    city:"Pune"
};

// Object.seal(user); // exsiting update
Object.freeze(user)
// user.name=1111;
// delete user.name;
console.log(user)

const ent = Object.entries(user)
// console.log(ent)
for(let e of ent){
    if(e[0]==='name'){
        console.log(e);
    }
}

const obj = Object.create(user);
const obj1={};
console.log(obj)
