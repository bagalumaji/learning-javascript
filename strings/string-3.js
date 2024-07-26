// 7. match()
// 8. replace()
// 9. replaceAll()
// 12. split()
// 13. substring()
// 14. toLowerCase()
// 15. toUpperCase()

let str='Hello World of JS';
console.log("match() : ",str.matchAll(/o/g));

//replace()
console.log("replace : ",str.replace('l','L'))
console.log("replace : ",str.replaceAll('l','L'))

//split()
console.log("split  ",str.split(" "));
console.log("split  ",str.split("Hello"));

// 14. toLowerCase()
// 15. toUpperCase()

console.log("to upper : ",str.toUpperCase())
console.log("to lower : ",str.toLowerCase())

//repeat()
console.log("repeat() - ",str.repeat(3));

//substring
//slice
console.log("sub-string - ",str.substring(0))
console.log("sub-string - ",str.substring(0,5))
console.log("sub-string - ",str.substring(5,0))
console.log("slice - ",str.slice(5,0))
//Hello World of JS
let firstName="ramesh";
console.log("slice - ",firstName.slice(-4,-1));