import { bubbleSort, insertionSort, selectionSort } from '.'

// You can use any method instead of `bubbleSort`, the test case should be same

test('Sort', () => {
  expect(bubbleSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4])
})

test('Sort', () => {
  expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
})

test('Sort', () => {
  expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('Sort', () => {
  expect(bubbleSort([1, 4, 2, 3, 3, 4, 1])).toEqual([1, 1, 2, 3, 3, 4, 4])
})

test('Sort', () => {
  expect(bubbleSort([1, 41, 22, 31, 32, 4, 11, 99, 88, 33, 88, 9])).toEqual([
    1,
    4,
    9,
    11,
    22,
    31,
    32,
    33,
    41,
    88,
    88,
    99,
  ])
})
