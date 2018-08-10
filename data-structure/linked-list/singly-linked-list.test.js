import SinglyLinkedList from './singly-linked-list'

describe('LinkedList-init', () => {
  const LinkedList1 = new SinglyLinkedList()
  it('-->1', () => {
    expect(LinkedList1.head).toBeNull()
  })
})

describe('LinkedList-append', () => {
  const LinkedList2 = new SinglyLinkedList()
  LinkedList2.append(1)
  LinkedList2.append(2)
  LinkedList2.append(3)

  it('-->1', () => {
    expect(LinkedList2.head.value).toBe(1)
  })
  it('-->2', () => {
    expect(LinkedList2.head.next.value).toBe(2)
  })
  it('-->3', () => {
    expect(LinkedList2.head.next.next.value).toBe(3)
  })
  it('-->4', () => {
    expect(LinkedList2.head.next.next.next).toBeNull()
  })
})

describe('LinkedList-remove', () => {
  const LinkedList2 = new SinglyLinkedList()
  LinkedList2.append(1)
  LinkedList2.append(2)
  LinkedList2.append(3)
  LinkedList2.append(4)
  LinkedList2.remove(3)

  it('-->1', () => {
    expect(LinkedList2.head.value).toBe(1)
  })
  it('-->2', () => {
    expect(LinkedList2.head.next.value).toBe(2)
  })
  it('-->3', () => {
    expect(LinkedList2.head.next.next.value).toBe(4)
  })
  it('-->4', () => {
    expect(LinkedList2.head.next.next.next).toBeNull()
  })
})
