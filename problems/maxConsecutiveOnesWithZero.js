function maxConsecutiveOnes(nums, K) {
    let maxOnes = 0;
    let windowStart = 0;
    let maxOneCount = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] === 1) {
            maxOneCount++;
        }

        if (windowEnd - windowStart + 1 - maxOneCount > K) {
            if (nums[windowStart] === 1) {
                maxOneCount--;
            }
            windowStart++;
        }

        maxOnes = Math.max(maxOnes, windowEnd - windowStart + 1);
    }

    return maxOnes;
}


// Example usage
const nums = [1, 1, 0, 1,1,0, 1, 1,0,  1, 0,0, 0,1];
const K = 2;
console.log(maxConsecutiveOnes(nums, K));  // Output: 6
