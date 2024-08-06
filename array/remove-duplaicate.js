const a = [1, 1, 1, 2, 3, 4, 5, 5]

// let p1 = 0;
// for (let p2 = 1; p2 < a.length; p2++) {
//     if (a[p1] != a[p2]) {
//         a[++p1] = a[p2];
//     }
// }
console.log(a);
const size = removeDuplicate(a);
for (let i = 0; i < size ; i++) {
    console.log(a[i]);
}

function removeDuplicate(a) {
    let p1 = 0;
    for (let p2 = 1; p2 < a.length; p2++) {
        if (a[p1] != a[p2])
            a[++p1] = a[p2];
    }
    return p1 + 1;
}