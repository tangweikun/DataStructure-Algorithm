import { radixSort } from '.'

test('Radix Sort', () => {
  expect(radixSort([1, 22, 333, 4444444, 55, 6666])).toEqual([
    1,
    22,
    55,
    333,
    6666,
    4444444,
  ])
})

test('Radix Sort', () => {
  expect(radixSort([123, 45, 3212])).toEqual([45, 123, 3212])
})

test('Radix Sort', () => {
  expect(radixSort([123456789, 4567, 32128])).toEqual([4567, 32128, 123456789])
})

test('Radix Sort', () => {
  expect(radixSort([123456789123, 4567, 1234567891234, 123456789122])).toEqual([
    4567,
    123456789122,
    123456789123,
    1234567891234,
  ])
})

test('Radix Sort', () => {
  expect(radixSort([123, 12415, 12, 4123])).toEqual([12, 123, 4123, 12415])
})

test('Radix Sort', () => {
  expect(radixSort([])).toEqual([])
})
