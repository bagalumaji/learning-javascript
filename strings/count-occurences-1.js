
const str="aaddeeggeedacs";
const count={}
for (let i = 0; i < str.length; i++) {
    if(count.hasOwnProperty(str[i])){
        count[str[i]] = count[str[i]] + 1;
    }else{
        count[str[i]] = 1;
    }
}

// for (let s of str) {
//     if(s in count){
//         count[s] = count[s]+1;
//     }else{
//         count[s]=1;
//     }
// }

// for (let s of str) {
//     if(Object.hasOwn(count,s)){
//         count[s] = count[s]+1;
//     }else{
//         count[s]=1;
//     }
// }

console.log(count)

//{a:1}