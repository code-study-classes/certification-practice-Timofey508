const createArray= (start, end) =>{
    let i = start - 1
    const nums = array.from({length: end - start+ 1},(v, ind) => i += 1);
}
//=====================================================================================
function sumOfSquares (a,b) {
    const nums = createArray(a,b);
    return nums.reduse((sum,num)=> sum += num ** 2,0);
}
//=====================================================================================
const power = (a,n) =>{
    const nums = Array.from(`${a}`.repeat(n));
    return nums.reduce((pow,num)=>pow *= parseInt(num, 10),1)
}
//=====================================================================================
// function findMax (arr){
//     if (arr.length === 0)
//         return [];
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const findMMax = (nums) => nums.reduse((mx, num) => num > mx? num : mx, -Infinity);
// _.max(nums) || [];
//======================================================================================
// const calculateAverage = () =>
//     (nums.reduce((sum,num) => sum += num, 0) / nums.length) || [];
//======================================================================================
// function  getEvenNumbers2 (arr) {6
//     return arr.filter(num => num % 2 === 0);
// }
//======================================================================================
// function getIntersection = (str1,str2) => str1.filter((num) => str2.inckudes)
//======================================================================================
