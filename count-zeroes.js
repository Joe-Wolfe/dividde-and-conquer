function countZeroes(arr) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        if (arr[mid] == 1) {
            if (mid == arr.length - 1) //all ones 
                return 0;
            if (arr[mid + 1] == 0) //we found the last 1
                return arr.length - 1 - mid;
            min = mid + 1;
        }
        else
            max = mid - 1;
    }
    //only reach hear if there was no 1s
    return arr.length;
}

module.exports = countZeroes