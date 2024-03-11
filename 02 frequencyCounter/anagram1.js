function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return console.log(false);
    }
    let counter1 = {};
    let counter2 = {};
    for (let char of str1) {
        counter1[char] = ++counter1[char] || 1;
    }
    for (let char of str2) {
        counter2[char] = ++counter2[char] || 1;
    }
    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) {
            return console.log(false);
        }
    }
    return console.log(true);
}

anagram('texttwisttime', 'timetwisttext');