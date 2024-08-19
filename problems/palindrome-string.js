function isPalindrome(str){
    let start=0;
    let end = str.length-1;
    let result=true;
    while (start<=end){
        if(str[start]!==str[end]){
            result = false;
            break;
        }
        start++;
        end--;
    }
    return result;
}
const str="aabbaa";
console.log(isPalindrome(str));
