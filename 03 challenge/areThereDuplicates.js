// 빈도수 세기 / 다중 포인터 - areThereDuplicates
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
// O(N)

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