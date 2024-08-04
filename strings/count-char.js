///Write a Java program to count the total number of occurrences of a given character in a string without using any loop?
function countCharacters(str, char) {
    let cnt = 0;
    let i = 0;
    while (i < str.length) {
        if (str[i] === char) {
            cnt++;
        }
        i++;
    }
    return cnt;
}

const count = countCharacters("hello world", "l");;
console.log("count : ", count)