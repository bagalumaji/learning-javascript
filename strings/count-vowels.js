
const str="hello";
const  vowels="aeiou";
let cnt=0;
for (let s of str){
    if(vowels.includes(s)){
    cnt++;
    }
}
console.log("count of vowels : ",cnt)