export function bucketSort(arr, step) {
  const { max, min } = getMaxAndMin(arr)
  const bucketCount = Math.ceil((max - min + 1) / step)
  const bucket = Array.from({ length: bucketCount }, _ => [])

  // 入桶
  for (let num of arr) {
    const order = Math.floor((num - min) / step)
    let i = 0
    while (bucket[order][i] < num) i++
    for (let j = bucket[order].length - 1; j > i - 1; j--) {
      bucket[order][j + 1] = bucket[order][j]
    }
    bucket[order][i] = num
  }

  // 出桶
  let res = []
  for (let m = 0; m < bucketCount; m++) {
    while (bucket[m].length > 0) res.push(bucket[m].shift())
  }

  return res
}

const getMaxAndMin = arr => {
  let max = -Infinity
  let min = Infinity
  for (let num of arr) {
    max = Math.max(max, num)
    min = Math.min(min, num)
  }
  return { max, min }
}
