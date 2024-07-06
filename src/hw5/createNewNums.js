export function createNewNums (nums) {
    let newNums = nums.map((el)=>{
        return el * 2
    });
    console.log(newNums);
}