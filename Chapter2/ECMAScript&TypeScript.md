# Chapter2. ECMAScript 和 TypeScript

> 本章代码基于 ES5(2009)

## let, var, const

```ts
const jsFramework = { name: "Angular" };
// 对于对象, const 只是保证引用不变, 但是对象的属性是可以变的
```

作用域实际上是从 ES6 才引入的

### ES6(2015)

1. 作用域
   1. let
   2. const
2. 箭头函数
3. 函数参数默认值
4. 模板字面量
5. 数组解构
6. class
   1. 继承
7. import

`Node` 无法直接运行使用 `import` 语法的 `js` 文件, 可以重命名为 `mjs`, 或者使用 `Deno` 和 `Bun`

## TypeScript

```shell
npm install -g typescript
tsc index.ts
```

### 类型推断

TypeScript 支持对含有初始值的变量进行类型推断, 但是建议对没有初始值的变量进行类型声明

### 接口

鸭子类型:如果它看起来像鸭子,像鸭子一样游泳,像鸭子一样叫,那么它一定是一只鸭子!

在面向对象的概念里, interface 就是一份合约, 实际上 TS 就是 JS 的一个接口, 告诉 JS 需要有哪些功能

```ts
interface Comparable {
  compareTo(b): number;
}
class MyObject implements Comparable {
  age: number;
  compareTo(b): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
```

#### 泛型

```ts
interface Comparable<T> {
  compareTo(b: T): number;
}

class MyObject implements Comparable<MyObject> {
  age: number;
  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0;
    }
    return this.age > b.age ? 1 : -1;
  }
}
```

可以是使用 `// @ts-check` 和 `JSDoc` 对 `JavaScript` 进行类型检测
