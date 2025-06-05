//1==============================================================
function isPositive (a){
    return a > 0
}
//2==============================================================
function isOdd (a) {
    return a % 2 !==0
}
//3==============================================================
function checkInequality (a,b){
    return a > 2 && b <= 3
}
//4==============================================================
function checkInequality2 (a,b){
    return a >= 0 || b < -2
}
//5==============================================================
function checkBetweenNumbers (a,b,c){
    return (a < b && b<c)|| (a>b && b>c)
}
//6==============================================================
function checkOddThreeDigitNumber (number){
    return (number > 99) && (number % 2 !== 0)
}