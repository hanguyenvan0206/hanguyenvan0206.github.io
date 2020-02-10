//https://codelearn.io/learningtask/index?id=3477&taskid=3782
function commonCharacterCount(s1, s2) {
  let arr1 = stringMap(s1),
    arr2 = stringMap(s2),
    count = 0
  for (let [key1, val1] of arr1) {
    for (let [key2, val2] of arr2) {
      if (key1 == key2) {
        val1 > val2 ? count += val2 : count += val1
      }
    }
  }
  return count;
}
function stringMap(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1)
    } else {
      map.set(str[i], 1)
    }
  }
  return map
}

