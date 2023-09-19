const numbers = [1,3,2,5,4];
// print the all elements of the array
console.log('printing array');
console.log(numbers);

// printing elements using for loop
console.log('printing elements using for loop-of loop')
for(const i of numbers) {
    console.log(i) ;
}

//printing elements using for loop
console.log('printing elements in reverse order using for loop')
for(let i=numbers.length-1;i>=0;i--) {
    console.log(numbers[i]) ;
}