let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

nums.forEach(function (el) {
    sum += el;
})
console.log(sum);

let newNums = nums.map((el)=>{
    return el * 2
});
console.log(newNums);

let min = Math.min(...nums);
let max = Math.max(...nums);
console.log(`min: ${min} max: ${max}` );