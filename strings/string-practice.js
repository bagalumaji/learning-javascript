const str="hello js";
console.log(str.length); //length

console.log(str.charAt(3)); // indexed char

console.log(str.includes('l')); //check for sub string or char

console.log(str.substring(1, 4)); //sub string

console.log(str.replace('l', "L")); //replace 1st

console.log(str.replaceAll('l', 'L')); //new string

console.log(str.split(" ")); //['','']

console.log(str.indexOf('l'));//  if present index else -1
console.log(str.lastIndexOf('l'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

console.log(str.concat(" world"));

console.log(str.startsWith("hello"));
console.log(str.endsWith("js"));

console.log(str.slice(1, 4));

console.log(str.search("l"));

console.log(str.charCodeAt(1));
console.log(str.padStart(10, "#"));
console.log(str.padEnd(10, "#"));






