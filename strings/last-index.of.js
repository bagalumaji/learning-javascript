

function lastIndexOfChar(searchChar, str) {
    let index = -1;
    let i = 0;
    while (i < str.length) {
        if (searchChar == str.charAt(i)) {
            index = i;
        }
        i++;
    }
    return index;
}

idx = lastIndexOfChar('l', "hello")
console.log(idx);

