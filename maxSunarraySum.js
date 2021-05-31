let maxSubarraySum = (arr, num) => {
    if (num === 1) return Math.max(...arr);
    
    let sum = 0;

    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }

    let j = 0;
    let max = sum;

    for (let i = num; i < arr.length; i++) {
        sum = sum - arr[i - num] + arr[i];

        if (sum > max) {
            max = sum;
        }
    }

    return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));