function search(arr, n) {
    let min = 0;
    let max = arr.length - 1;
    while(max >= min) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        if (currentElement < n) {
            min = middle + 1;
        } else if (currentElement > n) {
            max = middle - 1;
        } else {
            return console.log(middle);
        }
    }
    return console.log(false);
}

search([1,2,3,5,6,8,9,12,15,16,29,45,47,49,100,102,103,344,346,456,457,458,912,913,914,915,916,917,1000],344);