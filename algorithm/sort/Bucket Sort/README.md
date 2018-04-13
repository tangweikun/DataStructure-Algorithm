# 桶排序 <Bucket Sort>

## 定义

桶排序 (Bucket sort)的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排

## 过程

![Bucket Sort](https://cdn-images-1.medium.com/max/1600/1*QfuAg0ouokVxdvNUg3EfdQ.png)

![Bucket Sort](https://cdn-images-1.medium.com/max/1600/1*HUGqf7zYmYKK798ziTEGRg.png)

1.  设置一个定量的数组当作空桶
1.  遍历输入数据，并且把数据一个一个放到对应的桶里去
1.  对每个不是空的桶进行排序
1.  从不是空的桶里把排好序的数据拼接起来

## 时间复杂度

* 最坏时间复杂度 O(n²)
* 最优时间复杂度 O(n+k)
* 平均时间复杂度 O(n+k)
* 空间复杂度 O(n\*k)
