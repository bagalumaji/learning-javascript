//2,1,3,4,5
//5
const a = [2, 1, 3, 4, 5];
let max = a[0];

for (let i = 0; i < a.length; i++){
    if (a[i] > max) {
        max = a[i];
    }
}
console.log(max); //5

