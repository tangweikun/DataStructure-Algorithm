import {
  bubbleSort,
  insertionSort,
  selectionSort,
  shellSort,
  mergeSort,
  mergeTopDown,
  mergeSortBottomUp,
  quickSort,
} from '.'

// You can use any method instead of `quickSort`, the test case should be same

test('Sort', () => {
  expect(quickSort([])).toEqual([])
})

test('Sort', () => {
  expect(quickSort([0])).toEqual([0])
})

test('Sort', () => {
  expect(quickSort([-2, 3, -4, 1])).toEqual([-4, -2, 1, 3])
})

test('Sort', () => {
  expect(quickSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4])
})

test('Sort', () => {
  expect(quickSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
})

test('Sort', () => {
  expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('Sort', () => {
  expect(quickSort([1, 4, 2, 3, 3, 4, 1])).toEqual([1, 1, 2, 3, 3, 4, 4])
})

test('Sort', () => {
  expect(quickSort([11, 41, 22, 31, 32, 4, 1, 99, 88, 33, 88, 9])).toEqual([
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
