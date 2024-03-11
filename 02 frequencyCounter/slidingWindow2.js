function maxSum(arr,num) {
    if (num > arr.length) {
        return console.log(null);
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return console.log(max);
}

maxSum([1,2,5,2,8,1,5],4);