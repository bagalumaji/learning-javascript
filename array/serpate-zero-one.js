
const nums = [1, 0, 1, 1, 0, 0, 1]

let s = 0;
let e = nums.length - 1;
while (s < e-1) {
    if (nums[s] == 0) {
        s++;
    }
    if (nums[e] == 1) {
        e--;
    }
    if (nums[s] == 1 && nums[e] == 0) {
        let t = nums[s];
        nums[s] = nums[e];
        nums[e] = t;
    }
}
console.log(nums)
