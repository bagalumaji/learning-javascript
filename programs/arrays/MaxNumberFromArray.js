function getMaxValue1(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 1];
}

const arr = [2, 1, 4, 5, 3];
//console.log(getMaxValue1(arr));

function getMaxValue2(arr) {
  let maxValue = arr[0];
  for (let val of arr) {
    if (val > maxValue) {
      maxValue = val;
    }
  }
  return maxValue;
}

//console.log(getMaxValue2(arr));
function getMaxValue3(arr) {
  return Math.max(...arr);
}
console.log(getMaxValue3(arr));
