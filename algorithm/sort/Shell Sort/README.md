# 希尔排序 <Shell Sort>

## 定义

初期选用大跨步（增量较大）间隔比较，使记录跳跃式接近它的排序位置；然后增量缩小；最后增量为 1 ，这样记录移动次数大大减少，提高了排序效率

## 过程

![Shell Sort](http://bubkoo.qiniudn.com/shell-sort-animation.gif)

1.  先取一个正整数 d1(d1 < n)，把全部记录分成 d1 个组，所有距离为 d1 的倍数的记录看成一组，然后在各组内进行插入排序
1.  然后取 d2(d2 < d1)
1.  重复上述分组和排序操作；直到取 di = 1(i >= 1) 位置，即所有记录成为一个组，最后对这个组进行插入排序。一般选 d1 约为 n/2，d2 为 d1 /2， d3 为 d2/2 ，…， di = 1

## 时间复杂度

* 最坏时间复杂度 O(nlog2 n)
* 最优时间复杂度 O(nlog2 n)
* 平均时间复杂度 O(nlog2 n)
* 空间复杂度 O(n)

## 实例分析

1.  假设有数组 array = [80, 93, 60, 12, 42, 30, 68, 85, 10]，首先取 d1 = 4，将数组分为 4 组，如下图中相同颜色代表一组：
    ![Shell Sort](http://bubkoo.qiniudn.com/shell-sort-step1.1.png)
1.  然后分别对 4 个小组进行插入排序，排序后的结果为：
    ![Shell Sort](http://bubkoo.qiniudn.com/shell-sort-step1.2.png)
1.  然后，取 d2 = 2，将原数组分为 2 小组，如下图：
    ![Shell Sort](http://bubkoo.qiniudn.com/shell-sort-step2.1.png)
1.  然后分别对 2 个小组进行插入排序，排序后的结果为：
    ![Shell Sort](http://bubkoo.qiniudn.com/shell-sort-step2.2.png)
1.  最后，取 d3 = 1，进行插入排序后得到最终结果：
    ![Shell Sort](http://bubkoo.qiniudn.com/shell-sort-step3.png)
