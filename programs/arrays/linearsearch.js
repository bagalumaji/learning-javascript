
function linearSearch(arr,key){
    let index=-1;
    for(let i=0;i<arr.length;i++){
        if(key===arr[i]){
            index = i;
            break;
        }
    }
    return index;
}

const arr = [2,1,5,4,3];

const val = linearSearch(arr,1);
console.log(val)