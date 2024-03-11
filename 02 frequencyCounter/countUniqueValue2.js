function cUV(arr) {
    let answer = 0;
    for (let j = 1, i = 0; j < arr.length;) {
        if (i !== j && arr[i] < arr[j]) {
            arr[++i] = arr[j++];
        } else {
            j++;
        }
        if (i !== 0) {
            answer = i + 1;
        }
    }
    return console.log(answer);
}

cUV([-2, -1, -1, 0, 1]);