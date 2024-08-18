
const a=[1,1,0,1,1,0,1,0,1,1,1,1,1,0];
let maxCount=0;
let count=0;
for (let i = 0; i < a.length; i++) {
    if(a[i]===1){
       count++;
    }else{
        if(maxCount<count){
            maxCount=count;
        }
        count=0;
    }
}
console.log(maxCount);