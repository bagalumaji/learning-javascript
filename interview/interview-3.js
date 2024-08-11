
const obj = {}
function transform(data){
    data.name="hello";
    data=null;
    return data;
}

const newObj = transform(obj);
console.log({newObj,obj});