function binarySearch(arr,key){
    let start=0;
    let index=-1;
    let end = arr.length - 1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === key){
            index = mid;
            break;
        }else if(arr[mid] < key){
            start = mid+1;
        }else{
            end = mid-1;
        }
    }
    return index;
}

const arr = [1,2,3,4,5];

const val = binarySearch(arr,3);
console.log(val)