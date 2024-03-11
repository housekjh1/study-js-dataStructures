function maxSum(arr,num) {
    let max = 0;
    let sum = 0;
    if (arr.length < num) return console.log(null);
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
    max = sum;
    for (let i = num; i < arr.length; i++) {
        sum = sum - arr[i - num] + arr[i];
        max = Math.max(max, sum);
    }
    return console.log(max);
}

maxSum([1,2,5,2,8,1,5],4);