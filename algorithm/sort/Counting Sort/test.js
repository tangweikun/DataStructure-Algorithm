import { countingSort } from '.'

test('Counting Sort', () => {
  expect(countingSort([1, 9, 2, 3, 0, 0, 4], 0, 9)).toEqual([
    0,
    0,
    1,
    2,
    3,
    4,
    9,
  ])
})

test('Counting Sort', () => {
  expect(countingSort([11, 59, 2, 13, 2, 0, 4], 0, 59)).toEqual([
    0,
    2,
    2,
    4,
    11,
    13,
    59,
  ])
})
