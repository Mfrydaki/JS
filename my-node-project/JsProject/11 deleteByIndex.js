const arr = [12, 3, 4, 6]

let itemToRemove = arr.indexOf(3);
arr.splice(itemToRemove, 2)

console.log(arr);