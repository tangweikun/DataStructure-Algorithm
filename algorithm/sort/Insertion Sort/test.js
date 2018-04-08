import insertionSort from '.'

test('insertionSort', () => {
  expect(insertionSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4])
})

test('insertionSort', () => {
  expect(insertionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
})

test('insertionSort', () => {
  expect(insertionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('insertionSort', () => {
  expect(insertionSort([1, 4, 2, 3, 3, 4, 1])).toEqual([1, 1, 2, 3, 3, 4, 4])
})
