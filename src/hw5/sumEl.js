export function sumEl (nums) {
    let sum = 0;

    nums.forEach(function (el) {
        sum += el;
    })
    console.log(sum);
}