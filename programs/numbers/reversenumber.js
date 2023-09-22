
let num = 1234;
let reverse=0;
while(num!==0){
    let d = num % 10;
    num = Math.floor(num / 10);
    reverse  = reverse * 10 + d;
}
console.log(reverse);