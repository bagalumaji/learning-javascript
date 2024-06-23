function getCharacterOccurences(str){
    const count ={};
    for(let i=0;i<str.length;i++){
        // both will work
       // if(count.hasOwnProperty(str.charAt(i))){
       if(str.charAt(i) in count){
            count[str.charAt(i)] = count[str.charAt(i)]+1;
        }else{
            count[str.charAt(i)] = 1;
        }
    }
    return count;
}

const str="hello javascritp";
const result = getCharacterOccurences(str);
console.log(result);