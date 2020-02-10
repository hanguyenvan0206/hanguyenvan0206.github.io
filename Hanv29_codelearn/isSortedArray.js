function isSortedArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i] - arr[i + 1])
    }
    return newArr.forEach(ele => ele >= 0) || newArr.forEach(ele => ele <= 0)
  }