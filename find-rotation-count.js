function findRotationCount(arr) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        mid = Math.floor((min + max) / 2);

        if (findStart(arr[min], arr[mid], arr[max]) == 0) {
            console.log(arr[mid - 1], arr[mid], arr[mid + 1])
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

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0

//this function will return -1 if the start of the array is left of the midpoint,
//                          0 if the start of the array is potentially at the midpoint,  
//                          or 1 if the start of the array lies to the right of the midpoint 
function findStart(left, mid, right) {
    if (right < left && right < mid) return 1
    if (left > mid && mid < right) return 0
    return -1
}

module.exports = findRotationCount