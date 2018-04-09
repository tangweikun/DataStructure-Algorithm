export function shellSort(arr) {
  for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i]
      let j = i - gap
      while (j >= 0 && arr[j] > temp) {
        arr[j + gap] = arr[j]
        j -= gap
      }
      arr[j + gap] = temp
    }
  }

  return arr
}
