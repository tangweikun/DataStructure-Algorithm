import swap from '../swap'

export function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = true
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isSorted = false
      }
    }

    // 如果当前数组已经排好序，则提前结束遍历
    if (isSorted) return arr
  }
  return arr
}
