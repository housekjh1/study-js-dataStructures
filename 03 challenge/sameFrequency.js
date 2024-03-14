// 빈도수 세기 - sameFrequency
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// O(N)

function sameFrequency(n1, n2) {
    let n1s = n1.toString();
    let n2s = n2.toString();
    if (n1s.length !== n2s.length) return console.log(false);
    let c1 = {};
    let c2 = {};
    for (let x of n1s) {
        c1[x] = ++c1[x] || 1;
    }
    for (let x of n2s) {
        c2[x] = ++c2[x] || 1;
    }
    for (let i in c1) {
        if (c1[i] !== c2[i]) {
            return console.log(false);
        }
    }
    return console.log(true);
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false