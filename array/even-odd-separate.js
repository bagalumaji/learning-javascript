
const num = [2, 1, 3, 5, 6, 8];
console.log(num)
let b = 0;
let e = num.length - 1;
while (b < e-1) {
    if (num[b] % 2 == 0) {
        b++;
    }
    if (num[e] % 2 == 1) {
        e--;
    }
    if (num[b] % 2 == 1 && num[e] % 2 == 0) {
        let t = num[e];
        num[e] = num[b];
        num[b] = t;
    }
}
console.log(num)
