function findRotatedIndex(arr, target) {
    // first find the pivot index
    let left = 0;
    let right = arr.length - 1;
    let pivot = findRotationCount(arr);


    if (pivot != 0 && arr[0] < target)
        right = pivot - 1;
    else
        left = pivot;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] == target)
            return mid;

        if (arr[mid] > target) {
            right = mid - 1
        }
        else
            left = mid + 1
    }
    return -1
}

function findRotationCount(arr) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        mid = Math.floor((min + max) / 2);

        if (findStart(arr[min], arr[mid], arr[max]) == 0) {
            if (arr[mid - 1] > arr[mid] && arr[mid] < arr[mid + 1]) {
                return mid;
            }
            else {
                min = mid;
            }
        }
        else if (findStart(arr[min], arr[mid], arr[max]) == -1)
            max = mid - 1;
        else
            min = mid + 1
    }
    return min;

}

//this function will return -1 if the start of the array is left of the midpoint,
//                          0 if the start of the array is potentially at the midpoint,  
//                          or 1 if the start of the array lies to the right of the midpoint 
function findStart(left, mid, right) {
    if (right < left && right < mid) return 1
    if (left > mid && mid < right) return 0
    return -1
}

module.exports = findRotatedIndex