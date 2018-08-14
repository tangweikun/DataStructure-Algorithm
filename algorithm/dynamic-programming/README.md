# Dynamic Programming

## Definition

Dynamic programming amounts to breaking down an optimization problem into simpler sub-problems, and storing the solution to each sub-problem so that each sub-problem is only solved once.

### 0-1 背包问题(Knapsack problem)

<img src="https://twk-public.oss-cn-beijing.aliyuncs.com/Knapspack_problem.png" width="400" />

> 我们有 n 种物品，物品的重量为和价值分别为 w<sub>i</sub>,v<sub>i</sub>。背包所能承受的最大重量为 W，如何选择才能使得总价值最高

#### 朴素解法

> 时间复杂度: O(2<sup>n</sup>)

```ts
function solve(w: number[], v: number[], n: number, W: number) {
  return rec(0, W)

  function rec(i: number, j: number) {
    if (i === n) return 0 // 已经没有剩余商品

    if (j < w[i]) return rec(i + 1, j) // 无法挑选这个商品

    return Math.max(rec(i + 1, j), rec(i + 1, j - w[i]) + v[i]) // 挑选和不挑选的两种情况都尝试一下
  }
}
```

#### 记忆搜索法

```ts
function solve(w: number[], v: number[], n: number, W: number) {
  let dp = Array.from(Array(n + 1), () => Array(w + 1).fill(-1)) // 用`-1`表示尚未计算过
  return rec(0, W)

  function rec(i: number, j: number) {
    if (dp[i][j] >= 0) return dp[i][j] // 已经计算过的话直接使用之前的结果

    if (i === n) return (dp[i][j] = 0) // 已经没有剩余商品

    if (j < w[i]) return (dp[i][j] = rec(i + 1, j)) // 无法挑选这个商品

    return (dp[i][j] = Math.max(rec(i + 1, j), rec(i + 1, j - w[i]) + v[i])) // 挑选和不挑选的两种情况都尝试一下
  }
}
```
