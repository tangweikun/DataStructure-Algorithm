# 堆排序 <Heap Sort>

## 定义

堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。

## 堆的操作

* 最大堆调整（Max_Heapify）：将堆的末端子节点作调整，使得子节点永远小于父节点
* 创建最大堆（Build_Max_Heap）：将堆所有数据重新排序
* 堆排序（HeapSort）：移除位在第一个数据的根节点，并做最大堆调整的递归运算

## 过程

![Heap Sort](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

## 时间复杂度

* 最坏时间复杂度 O(nlogn)
* 最优时间复杂度 O(nlogn)
* 平均时间复杂度 O(nlogn)
* 空间复杂度 O(nlogn)
