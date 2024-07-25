
/*
length
1. charAt()
2. charCodeAt()
3. concat() /+
4. includes()
5. indexOf()
6. lastIndexOf()
7. match()
8. replace()
9. replaceAll()
12. split()
13. substring(1,7)
14. toLowerCase()
15. toUpperCase()
16. trim()
17. trimStart() / trimLeft()
18. trimEnd() / trimRight()
19. startsWith()
20. endsWith()
21. padStart()
22. padEnd()
23. repeat()
10. search()
11. slice()
*/

let str='  js programming  ';

console.log(str);

//length
console.log("length of String : ",str.length)

// console.log(str.trimStart());
// console.log(str.trimEnd());
str = str.trim();
console.log("length of String : ",str.length)

console.log("Character at pposition 15 : "+str.charAt(-25))
console.log(typeof str.charAt(-20));
