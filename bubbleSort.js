let nums = [1,3,4,1,3,5,6,2,12,10,13,11,10,18,20,15]

function bubbleSort(numList) {
    let numListLength = numList.length
    let swapped
    do {
        swapped = false
        for(let i = 0; i < numListLength - 1; i++) {
            console.log(numListLength - 1);
            if(numList[i] > numList[i+1]) {
                let temp = numList[i]
                numList[i] = numList[i+1]
                numList[i+1] = temp
                swapped = true
            }
        }
        --numListLength
    } while (swapped);

    return numList
}

let arrSorted = bubbleSort(nums)
console.log(arrSorted);
