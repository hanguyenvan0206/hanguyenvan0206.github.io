//https://codelearn.io/learningtask/index?id=3477&taskid=3835
function checkPalindrome(inputString){
    if(inputString.length==1){
        return true
    }
    if(inputString.length%2==0){
        let result;
        for(let i=0; i<inputString.length/2;i++){
            if(inputString[i]===inputString[inputString.length-1-i]){
                result=true;
            }else{
                 result = false
            }
        }
        return result;
    }else{
        let result;
        for(let i=0; i<inputString.length-1/2;i++){
            if(inputString[i]===inputString[inputString.length-1-i]){
                result=true;
            }else{
                result = false
            }
        }
        return result;
    }

}
