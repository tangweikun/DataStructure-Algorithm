import bubbleSort from '.'

test('bubbleSort', () => {
  expect(bubbleSort([2, 3, 4, 1])).toEqual([1, 2, 3, 4])
})

test('bubbleSort', () => {
  expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
})

test('bubbleSort', () => {
  expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('bubbleSort', () => {
  expect(bubbleSort([1, 4, 2, 3, 3, 4, 1])).toEqual([1, 1, 2, 3, 3, 4, 4])
})
