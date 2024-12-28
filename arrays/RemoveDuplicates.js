function removeDuplicates(arr) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[++index] = arr[i];
        }
    }
    return ++index;
}

const arr = [6,1, 1, 2, 3, 3, 4, 5, 5];
const size = removeDuplicates(arr)
for (let i = 0; i < size; i++) {
    console.log(arr[i])
}