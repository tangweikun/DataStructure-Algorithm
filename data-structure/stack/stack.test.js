import Stack from '.'

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack()
    expect(stack).not.toBeNull()
  })

  it('should stack data to stack', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)

    expect(stack.value.toString()).toBe('1,2')
  })

  it('should peek data from stack', () => {
    const stack = new Stack()

    expect(stack.peek()).toBeNull()

    stack.push(1)
    stack.push(2)

    expect(stack.peek()).toBe(2)
  })

  it('should check if stack is empty', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBeTruthy()

    stack.push(1)
    expect(stack.isEmpty()).toBeFalsy()
  })

  it('should pop data from stack', () => {
    const stack = new Stack()

    stack.push(1)
    stack.push(2)

    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBeNull()
    expect(stack.isEmpty()).toBeTruthy()
  })
})
