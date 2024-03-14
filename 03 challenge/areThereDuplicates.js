function areThereDuplicates(...args) {
    let c = {};
    for (let x of args) {
        c[x] = ++c[x] || 1;
    }
    for (let i in c) {
        if (c[i] >= 2) {
            return console.log(true);
        }
    }
    return console.log(false);
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true