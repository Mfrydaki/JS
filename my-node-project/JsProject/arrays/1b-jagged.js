const jagged = Array(3)

for(let i = 0; i < jagged.length; i++){
    jagged[i] = new Array(2)
    for (let j = 0; j < jagged.length; j++){
        jagged[i][j] =`[${i}, ${j}]`
    }
}
