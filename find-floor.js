function findFloor(arr, target) {

    if (arr[0] > target) return -1;
    if (arr[arr.length - 1] < target) return arr[arr.length - 1];

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    return arr[left - 1];
}

module.exports = findFloor