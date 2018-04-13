import { bucketSort } from '.'

test('Bucket Sort', () => {
  expect(bucketSort([1, 3, 4, 5, 2, 3, 9], 3)).toEqual([1, 2, 3, 3, 4, 5, 9])
})

test('Bucket Sort', () => {
  expect(bucketSort([1, 8, 9, 33, 21, 2, 98, 64], 10)).toEqual([
    1,
    2,
    8,
    9,
    21,
    33,
    64,
    98,
  ])
})

test('Bucket Sort', () => {
  expect(bucketSort([22, 12, 33, 44, 55], 10)).toEqual([12, 22, 33, 44, 55])
})

test('Bucket Sort', () => {
  expect(bucketSort([1, 9, 2, 3, 2, 1, 2, 1, 3, 2, 2, 8, 7], 3)).toEqual([
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    7,
    8,
    9,
  ])
})

test('Bucket Sort', () => {
  expect(bucketSort([], 0)).toEqual([])
})
