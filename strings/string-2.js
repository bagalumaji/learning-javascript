// length
// 1. charAt()
// 2. charCodeAt()
// 3. concat() /+
// 4. includes()
// 5. indexOf()
// 6. lastIndexOf()
//length

let str="js programming";

//length - property
console.log(str.length)

console.log(str.charAt(0)) // 0th index character

console.log(str.trim())
// console.log(str)
//trimStart - start
//trimEnd - end

console.log("charCodeAt() : ",str.charCodeAt(0));

//concat()

console.log("concat() - ",str.concat("Hi","Hello"));
// console.log(str)


//includes()

console.log("includes() : ",str.includes('js'))
console.log("indexOf() : ",str.indexOf('mz'));
console.log("search() : ",str.search('m'));

//lastIndexOf()

console.log("lastIndexOf() : ",str.lastIndexOf('programming'));

