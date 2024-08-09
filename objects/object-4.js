// abcczzrr

//a=1
//b=1
const charOccur = {};

const str = "abcczzrcar";
let name = "Ram";
for (let i = 0; i < str.length; i++) {
    // if(charOccur.hasOwnProperty(str.charAt(i))){
    //if(Object.hasOwn(charOccur,str.charAt(i))){
    // if (charOccur[str[i]]) {//1
    if(str[i] in charOccur){
        charOccur[str[i]] = charOccur[str[i]] + 1;
    } else {
        charOccur[str[i]] = 1;
    }
}


const k = Object.keys(charOccur)
// console.log(k)
for(let t of k){
    if(charOccur[t]>1) {
        console.log(t, charOccur[t])
    }
}
const v = Object.values(charOccur)

console.log(v)

const obj3 = {
    firstName:"abc",
    greeting:function (){
        console.log("hello");
    },
    hello(){
        console.log(this.firstName);
    }

}
obj3.greeting();

obj3.hello();