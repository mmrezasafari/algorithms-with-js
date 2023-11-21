const nums = [2, 5, 6, 8, 9, 10];
const target = 9;
const length = nums.length
let low = 0
let high = nums.length - 1

function recursiveBinarySearch (numbers, low, high, target) {
    if(low > high) return -1;

    let mid = Math.floor(low + (high - low) / 2);

    if(target == numbers[mid]) return mid;

    if(target > numbers[mid]) {
        return recursiveBinarySearch(numbers, mid + 1, high, target)
    } else {
        return recursiveBinarySearch(numbers, low, mid - 1, target)
    }
}

function iterationBinarySearch (numbers, length, target) {
    let low = 0, high = length - 1;

    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if(target == numbers[mid]) return mid

        if (target > numbers[mid]) {
            low = mid + 1
        } else {
            high = mid - 1;
        }
    }

    return -1
}

let index1 = recursiveBinarySearch(nums, low, high, target)
let index2 = iterationBinarySearch(nums, length, target)

if (index1 != -1 && index2 != -1) {
    console.log("Element found at index %d", index1);
}
else {
    console.log("Element not found in the array");
}