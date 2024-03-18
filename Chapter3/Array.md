# 数组

JS 支持在一个数组中保存多个类型的值, 但不推荐这么做

```js
// 数组长度
let arr = [1, 2, 3, 4];
arr.length;

// 插入元素
arr.push(5); // 尾
arr.unshift(0); // 头

arr.splice(5, 0, 2, 3, 4);

// 删除元素
arr.pop();
// 删除第一个
arr.shift();
// or
let reArr = arr.reverse();
reArr = reArr.pop();
arr = reArr.reverse();
arr.splice(1, 2); // 删除索引为 1 开始 2 个元素
arr.splice(5, 3, 2, 3, 4);
```

#### 迭代器函数

```js
const isEven = (x) => x % 2 === 0;
numbers.every(isEven); // every 直到返回 false
numbers.some(isEven); // some 直到返回 true
```

```js
// map, filter, reduce 是 JS 函数式编程的基础
```

#### ES6

```js
for (const n of numbers) {
  console.log(n % 2 === 0 ? "even" : "odd");
}
```

ES6 引入了迭代起 `@@iterator`

```js
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

const aKeys = numbers.keys(); // 得到数组索引的迭代器
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next()); // {value: 2, done: false }
const aValues = numbers.values(); // 同理
```
