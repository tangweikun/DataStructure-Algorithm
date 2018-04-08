import swap from '../swap'

export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i
    while (arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }

  return arr
}
