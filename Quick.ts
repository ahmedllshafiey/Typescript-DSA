function quickSort(arr: number[]): number[] {
    // Base case: if the array has fewer than two elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element (e.g., the last element)
    const pivot = arr[arr.length - 1];

    // Partition the array into two subarrays: elements less than the pivot and elements greater than the pivot
    const leftArr: number[] = [];
    const rightArr: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    // Recursively apply quick sort to the left and right subarrays
    const sortedLeftArr = quickSort(leftArr);
    const sortedRightArr = quickSort(rightArr);

    // Combine the sorted subarrays and the pivot element
    return [...sortedLeftArr, pivot, ...sortedRightArr];
}