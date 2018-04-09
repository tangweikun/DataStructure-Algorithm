export function mergeSortTopDown(arr) {
  if (arr.length < 2) return arr
  const middle = ~~(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)
  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
}

function mergeTopDown(left, right) {
  const res = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) res.push(left.shift())
    else res.push(right.shift())
  }
  res.push(...left, ...right)

  return res
}

export function mergeSortBottomUp(array) {
  let step = 1
  while (step < array.length) {
    let left = 0
    while (left + step < array.length) {
      mergeBottomUp(array, left, step)
      left += step * 2
    }
    step *= 2
  }
  return array
}

function mergeBottomUp(array, left, step) {
  const right = left + step
  const end = Math.min(left + step * 2 - 1, array.length - 1)
  let leftMoving = left
  let rightMoving = right
  const temp = []

  for (let i = left; i <= end; i++) {
    if (
      (array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
      leftMoving < right
    ) {
      temp[i] = array[leftMoving]
      leftMoving++
    } else {
      temp[i] = array[rightMoving]
      rightMoving++
    }
  }

  for (let j = left; j <= end; j++) {
    array[j] = temp[j]
  }
}
