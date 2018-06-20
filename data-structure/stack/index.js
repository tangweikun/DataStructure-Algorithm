export default class Stack {
  constructor() {
    this.value = []
  }

  push(value) {
    this.value = [...this.value, value]
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    const temp = this.value[this.value.length - 1]
    this.value = this.value.slice(0, -1)
    return temp
  }

  isEmpty() {
    return this.value.length === 0
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.value[this.value.length - 1]
  }
}
