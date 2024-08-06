//Write a Java program to remove all white spaces from a string?

function removeWhiteSpaces(str) {
    let result = "";
    let i = 0;
    while (i < str.length) {
        if (str[i] !== ' ') {
            result += str[i];
        }
        i++;
    }
    return result;
}

console.log(removeWhiteSpaces('hi hello welcome to js world'))