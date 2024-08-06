//'hello' --> indexOf('z')==> -1

// str
// index
// for , while
// condition
//index
//else -1;

let index = -1;
const str = "hello world";
const searchChar = "z";
let i = 0;
while (i < str.length) {
    if (searchChar == str.charAt(i)) {
        index = i;
    }
    i++;
}
if (index == -1) {
    console.log(searchChar, " is not present");
} else {
    console.log(`${searchChar} is present at position ${index}`);
}