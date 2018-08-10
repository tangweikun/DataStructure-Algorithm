import Node from './node'

export default class SinglyLinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
  }

  // 如果节点有存在相同的value时该方法会报错
  remove(value) {
    let current = this.head
    while (current !== null) {
      if (current.value === value) {
        current.value = current.next.value
        current.next = current.next.next
      }
      current = current.next
    }
  }
}
