export function countingSort(array, min, max) {
  // Count the instances of each element.
  const count = Array(max - min + 1).fill(0)

  // Build up our index count array.
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++
  }

  // Modify array and move elements into their sorted location.
  let pos = 0
  for (let j = min; j <= max; j++) {
    while (count[j]-- > 0) {
      array[pos++] = j
    }
  }

  return array
}
