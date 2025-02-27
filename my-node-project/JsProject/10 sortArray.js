const num = [12 , 43, 45, 2, 6]


// num.sort(function(a, b){
//     if ( a > b ) return 1;
//     if ( a < b ) return -1;
//     if ( a === b ) return 0;
//})
 
num.sort(function(a , b){
    return a - b;

})
 
console.log(num);
