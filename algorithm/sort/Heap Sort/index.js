export function heapSort(arr) {
  function swap(i, j) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  function max_heapify(start, end) {
    // 建立父节点指标和子节点指标
    let dad = start
    let son = dad * 2 + 1

    //若子节点指标超过范围直接跳出函数
    if (son >= end) return

    // 先比较两个子节点大小，选择最大的
    if (son + 1 < end && arr[son] < arr[son + 1]) son++

    // 如果父节点小于子节点时，交换父子内容再继续子节点和孙节点比较
    if (arr[dad] <= arr[son]) {
      swap(dad, son)
      max_heapify(son, end)
    }
  }

  const len = arr.length

  // 初始化，i从最后一个父节点开始调整
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) max_heapify(i, len)

  // 先将第一个元素和已排好元素前一位做交换，再重新调整，直到排序完毕
  for (let i = len - 1; i > 0; i--) {
    swap(0, i)
    max_heapify(0, i)
  }

  return arr
}
