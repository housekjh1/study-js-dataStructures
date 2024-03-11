function cUV(arr) {
    let i = 0;
    if (arr.length < 1) {
        return console.log(i);
    }
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            arr[++i] = arr[j];
        }
    }
    return console.log(i+1);
}

cUV([-2,-1,-1,0,1]);