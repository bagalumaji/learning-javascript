
let str = "atul";


//atul - 4
//3
//tul

function firstNonRepeatingCharacter(str) {
    let i = 0;
    while (str.length > 0) {
        ch = str[0];
        let l1 = str.length;
        str = str.replaceAll(ch, "");
        let l2 = str.length;
        if (l1 == l2 + 1) {
            console.log(ch);
            break;
        }
        i++;
    }
    return ch;
}

console.log(firstNonRepeatingCharacter(str))