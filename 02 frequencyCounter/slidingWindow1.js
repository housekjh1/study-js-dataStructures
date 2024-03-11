function maxSum(arr,num) {
    if (num > arr.length) {
        return console.log(null);
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let sum = 0;
        for (let j = i; j < i + num; j++) {
            sum += arr[j];
        }
        if (max < sum) {
            max = sum;
        }
    }
    return console.log(max);
}

maxSum([1,2,5,2,8,1,5],4);