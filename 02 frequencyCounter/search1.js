function search(arr, n) {
    for (let x in arr) {
        if (arr[x] === n) {
            return console.log(x);
        }
    }
    return console.log(false);
}

search([1,2,3,5,6,8,9,12,15,16,29,45,47,49,100,102,103,344,346,456,457,458,912,913,914,915,916,917,1000],2);