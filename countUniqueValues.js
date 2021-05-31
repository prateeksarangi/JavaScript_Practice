// let countUniqueValues = (arr) => {
//     let flag = {};

//     for (let val of arr) {
//         flag[val] = (flag[val] || 1);
//     }
    
//     return Object.keys(flag).length;
// }

let countUniqueValues = (arr) => {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}


console.log(countUniqueValues([1, 1, 1, 2, 4, 8]));