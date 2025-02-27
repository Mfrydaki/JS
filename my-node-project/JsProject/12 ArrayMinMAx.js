const ages =[ 12, 32, 54];

function getMin (arr){
    if (!ages) return;

    let minVal = Math.min(...ages);
    let minPosition = arr.indexOf(minVal);
    return [minVal, minPosition];      
}  

function getMax(arr){
    if (!arr) return;

    let maxVal = Math.max(...arr);
    let maxPosition = arr.indexOf(maxVal);
    return [maxVal, maxPosition];

}

console.log(getMin(ages));
console.log(getMax(ages))

