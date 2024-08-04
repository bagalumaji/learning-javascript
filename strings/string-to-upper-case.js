
function stringToUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) - 32);
    }
    return result;
}
const str = "sharnnaya";
console.log(stringToUpperCase(str));

const result = str.split().map(char => String.fromCharCode(65)).join();
console.log(result);