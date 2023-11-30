const arr1 = [1,2,3,'hi'];
arr1.push(5);
//console.log(arr1);
arr1.unshift(7);
//console.log(arr1);
arr1.pop();
arr1.shift();
//console.log(arr1);
arr1.forEach(val=>console.log(val));

for(let key in arr1){
console.log(key,arr1[key]);
}
const arr2 = [8,9];

const arr3 = arr1.concat(arr2);

//console.log(arr3);

const newArr = [...arr1,...arr2];
//console.log(newArr);

//console.log(newArr.slice(2,5));
//console.log(arr1.splice(2, 2));

//arr2.map(val=>val*2).forEach(e=>console.log(e))

arr1.filter(v=> typeof v === "number").map(v=>v*v).forEach(v=>console.log(v))