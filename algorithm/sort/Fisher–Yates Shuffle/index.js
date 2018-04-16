// HELP:

export function shuffle(array) {
  let m = array.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    const temp = array[m]
    array[m] = array[i]
    array[i] = temp
  }
  return array
}
