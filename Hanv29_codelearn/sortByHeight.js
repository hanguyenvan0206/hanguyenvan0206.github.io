function sortByHeight(a) {
    let arr = a.map(ele => ele),
        treeIndex = [],
        result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            treeIndex.push(i)
        }
    }
    result = arr.filter(ele => ele !== -1).sort((a, b) => a - b)
    for (let index = 0; index < treeIndex.length; index++) {
        result.splice(treeIndex[index], 0, -1)
    }
    return result;
}