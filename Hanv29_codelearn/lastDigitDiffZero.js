function lastDigitDiffZero(n) {
    let mul = 1, arr;
    for (let i = 1; i <= n; i++) {
      mul *= i
    }
    arr = mul.toString().split('').map(Number);
    console.log(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] != 0) {
        return arr[arr.length - 1];
      } else {
        arr.pop();
      }
    }
  }