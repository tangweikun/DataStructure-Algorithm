import selectionSort from '.'

test('selectionSort', () => {
  expect(selectionSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4])
})

test('selectionSort', () => {
  expect(selectionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
})

test('selectionSort', () => {
  expect(selectionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('selectionSort', () => {
  expect(selectionSort([1, 4, 2, 3, 3, 4, 1])).toEqual([1, 1, 2, 3, 3, 4, 4])
})
