function factorSum(n) {
    let count = 0;
    if (n == 4) {
        return n
    }
    if (isPrime(n) === true) {
        return n;
    } else {
        for (let i = 2; i <= n; i++) {
            while (n % i == 0) {
                n = n / i;
                count += i;
            }
        }

        if (isPrime(count) === true) {
            return count;
        } else {
            return factorSum(count);

        }
    }
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }

    }
    return true
}