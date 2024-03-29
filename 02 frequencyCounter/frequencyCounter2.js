function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return console.log(false);
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return console.log(false);
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return console.log(false);
        }
    }
    console.log(frequencyCounter1, frequencyCounter2);
    return console.log(true);
}

same([1,2,3,2],[9,1,4,4]);