
const a=[2,1,4,2,4];

for(let i=0;i<a.length;){
    if(a[i]!==a[a[i]-1]){
        let t = a[i];
        a[i] = a[t-1];
        a[t-1]=t;
    }else{
        i++;
    }
}
console.log(a)
for (let i = 0; i < a.length; i++) {
    if(a[i]!==i+1){
        console.log(`missing number : ${i+1}`);
        console.log(`duplicate number : ${a[i]}`);
    }
}