function sortedFrequency(arr, target) {
    let min = 0;
    let max = arr.length - 1;
    let first = -1;
    let last = -1;

    //find First occurance
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (arr[mid] == target) {
            if (mid == 0) // the first occurance was at the begining
            {
                first = mid;
                break;
            }
            else if (arr[mid - 1] != target) //this is the first occurance of target
            {
                first = mid;
                break;
            }
        }
        if (arr[mid] < target)
            min = mid + 1
        else
            max = mid - 1
    }

    if (first == -1) return -1; // no occurances of target in array

    min = first;
    max = arr.length - 1;

    //find last occurance
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (arr[mid] == target) {
            if (mid == arr.length - 1) // the last occurance was at the end of the array
            {
                last = mid;
                break;
            }
            else if (arr[mid + 1] != target) //this is the last occurance of target
            {
                last = mid;
                break;
            }
        }
        if (arr[mid] <= target)
            min = mid + 1
        else
            max = mid - 1
    }

    return last - first + 1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1

module.exports = sortedFrequency