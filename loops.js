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
    
    console.log(nums);

}