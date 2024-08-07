
// array

// pre -- number, boolean und, string
//ref ---> array, object, function

// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// const e = 100; 
// e = 100;


const val = [2, 4, 3, 1, 5]; //1000
//0  1  2                     
// values = 1000;
// values = [2,2,3,4] //3000
// values = 3000;
// const a = ['abc', 11, true, null, undefined, NaN, { name: "Abc" }, function () { }];

// const f1 = a[8];
// f1();
// console.log(values[1])
// console.log(values[0])

// values[1] = 22;
// console.log(values[1])

// for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
// }

// for (let val of values) {
//     console.log(val);
// }

// for (let val in values) {
//     console.log(val);
// }

//push
// unshift
//pop
//shift

val.push(11);
val.unshift(10);
// console.log(val)
val.pop();
val.shift()
// console.log(val)
// console.log(val.includes(3, 3));

// const t = val.concat(['a', 'b', 'c'])
// console.log(val)
// console.log(t)

// const str = val.toString();
// console.log(str);
// console.log(val.join(",", "1,2,3,4,5,6")); // 

// const t = val.slice(1, 4);
// console.log(val)
// console.log(t)
// const t2 = val.splice(1, 4);
// console.log(val)
// console.log(t2)

// t2.findIndex()


// const val = [2, 4, 3, 1, 5];
// val.sort().reverse();

// for (let i = 0; i < val.length; i++)
// {
//     // val[i]++;
//     // val[i] = val[i] +1
//     val[i] += 1;
// }
//()=>{}
const test = function (ele) { ele = ele * ele; return ele; }
console.log(test(3));

// const sqr = val.map(function (ele) { return ele * ele; });
// const val = [2, 4, 3, 1, 5];
const a = ['a', 'b', 'c', 'd', 'e', 'f']
const upper = a.map(e => e.toUpperCase());
// console.log(upper);
const sqr = val.map(ele => ele % 2 == 0);
const even = val.filter(ele => ele % 2 == 0);
// console.log(sqr)
// console.log(even)

const sum = val.reduce((sum, x) => sum + x, 0);
// console.log(sum);
function test1() {
    console.log("Hello");
}

const arr = a => a * a;
const b = [1, 2, [3, 4], 5];
console.log(b[2][1])


const b1 = b.flat();
console.log(b1);

b1.forEach(x => console.log(x));