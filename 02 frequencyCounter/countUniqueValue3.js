function cUV(arr) {
    let i = 0;
    if (arr.length === 0) {
        return console.log(i);
    }
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            arr[++i] = arr[j];
        }
    }
    return console.log(i + 1);
}

cUV([1,2,5,8,99]);