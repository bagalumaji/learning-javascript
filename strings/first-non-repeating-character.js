
let str = "aattul";


//aatul
//a
//tul

function firstNonRepeatingCharacter(str) {
    let i = 0;
    let ch = '';
    while (i < str.length) {
        ch = str[i];
        if (!str.substring(i + 1).includes(ch) && !str.substring(0,i).includes(ch)) {
            ch = str[i];
            break;
        }
        i++;
    }
    return ch;
}

console.log(firstNonRepeatingCharacter(str))