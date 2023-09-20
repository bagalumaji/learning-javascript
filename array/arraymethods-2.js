
//entries() - Returns an iterator over the key-value pairs of an array.
// lastIndex() - 
// indexOf() -
// includes
// find


const arr = [1, 2, 3, 4, 5, 6, 7]

let val = arr.lastIndexOf('d');

console.log(val);

console.log(arr.indexOf('d'));

console.log(arr);

const [[...b]] = arr.entries();

//console.log(b)

console.log(arr.includes(3))

console.log(arr.find(value => value === 2));

console.log( arr.values().next());


arr.filter(value => value % 2 ===0).forEach(value => console.log(value));

arr.map(value=>value*2).forEach(value => console.log(value));

const sum = arr.reduce((a,e)=> a+e,0);
console.log('sum ',sum)
const c = [1,2,[3,4],[4,6]]
console.log(c.flat());

console.log(c.flatMap(e=>e+2));



