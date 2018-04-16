export function radixSort(array) {
  let maxLength = 0
  for (let num of array) {
    maxLength = Math.max(String(num).length, maxLength)
  }

  const bucket = Array.from({ length: 10 }, () => [])

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < array.length; j++) {
      const str = array[j] + ''
      if (str.length >= i + 1) {
        const k = parseInt(str[str.length - i - 1])
        bucket[k].push(array[j])
      } else {
        // 高位为 0
        bucket[0].push(array[j])
      }
    }
    array.splice(0, array.length)
    for (let j = 0; j < 10; j++) {
      const t = bucket[j].length
      for (let k = 0; k < t; k++) {
        array.push(bucket[j][k])
      }
      bucket[j] = []
    }
  }
  return array
}
