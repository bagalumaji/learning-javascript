//hello
//01234

let str="hello";
//olleh

// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
//     //str.charAt(i);
// }

//hello
// for(let i=str.length-1;i>=0;i--){
//     console.log(str[i]);
//     //str.charAt(i);
// }

//hello
// let reverse = '';
// for(let i=str.length-1;i>=0;i--){
//     reverse = reverse + str.charAt(i);
// }
// console.log("reversed String : ",reverse);
//reverse='olleh'
//i=-1

//  "olle" +'h'

function reverseString(str1){
    let reverse = '';
    for(let i=str1.length-1;i>=0;i--){
      reverse = reverse + str1.charAt(i);
    }
    return reverse;
//    console.log("reversed String : ",reverse);
}

const reverse = reverseString("javascript");

console.log("reversed String : ",reverse);

