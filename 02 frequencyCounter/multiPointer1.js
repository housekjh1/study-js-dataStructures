function sumZero(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return console.log([arr[i], arr[j]]);
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5]);