function compareSumOfDigits(str) {
    let a = 0;
    let b = 0;
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(parseInt(str.charAt(i)))
    };
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        a += arr[i]
      } else {
        b += arr[i]
      }
    };
    return a - b;
  }