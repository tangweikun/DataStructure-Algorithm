export function quickSort(arr) {
  if (arr.length <= 1) return arr

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const [left, right] = [[], []]

  for (let num of arr) {
    if (num < pivot) left.push(num)
    else right.push(num)
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
