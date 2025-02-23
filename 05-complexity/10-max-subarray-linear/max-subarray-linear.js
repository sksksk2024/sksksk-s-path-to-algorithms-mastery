function maxSubarraySum(arr, k) {
  if (arr.length < k) return -Infinity; // Ensure a valid return for small arrays

  let maxSum = -Infinity, // Ensure it works for all negative values
    currentSum = 0;

  // First window sum
  for (let i = 0; i < k; ++i) {
    currentSum += arr[i];
  }
  maxSum = currentSum;

  // Slide the window
  for (let i = k; i < arr.length; ++i) {
    currentSum += arr[i] - arr[i - k]; // Remove leftmost, add new element
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
