const arr = [2, 1, 4, 5, 3];

// 1st approach
function getMinValue(arr) {
  return arr.sort((a, b) => a - b)[0];
}
console.log(getMinValue(arr));

// 2nd approach
function getMinValue1(arr) {
  let min = arr[0];
  for (let val of arr) {
    if (val < min) {
      min = val;
    }
  }
  return min;
}
console.log(getMinValue1(arr));

// 3rd approach
function getMinValue2(arr) {
  return Math.min(...arr);
}
console.log(getMinValue2(arr));
