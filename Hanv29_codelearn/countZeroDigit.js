function countZeroDigit(a,b) {
    var str = '';
    for (let i = a; i <= b; i++){
        str += i;}
    let length = str.split("0").length;
    if (length == 0){
        return 0;
    }else{
        return length - 1;
    }
  }