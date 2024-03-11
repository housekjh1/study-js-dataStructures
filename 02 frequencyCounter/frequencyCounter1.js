function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return console.log(false);
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // indexOf()의 사용으로 인해 O(n**2)
        if (correctIndex === -1) {
            return console.log(false);
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return console.log(true);
}

same([1,2,3,2],[9,1,4,4]);