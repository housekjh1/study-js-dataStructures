// 소수 갯수 세기

function primeNum(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    console.log(count);
}

primeNum(1000);