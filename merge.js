function merge(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log(merge(arr1, arr2)); 
console.log(arr1); 
console.log(arr2); 

let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
console.log(merge(arr3, arr4));

let arr5 = [3, 4, 5];
let arr6 = [1, 2];
console.log(merge(arr5, arr6));
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort};