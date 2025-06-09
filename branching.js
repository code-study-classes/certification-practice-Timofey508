function incrementIfPositive (number){
    if(number > 0){
        return number + 1;
    }else{
        return number;
    }
}
console.log(incrementIfPositive(5))
console.log(incrementIfPositive(-3))
console.log(incrementIfPositive(0))
//============================================================
function getIndexOfSmallerNumber (number1,number2){
    if(number1 <= number2){
        return 1
    }else {
        return 2
    }
}
console.log(getIndexOfSmallerNumber(5,8))
console.log(getIndexOfSmallerNumber(10,3))
console.log(getIndexOfSmallerNumber(7,7))
//============================================================