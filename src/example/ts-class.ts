/**
 *  TS中的类
 * 基础 修饰符 readonly修饰符 参数属性 静态属性
 * 可选类属性 存取器 抽象类 实例类型 对前面跳过知识的补充
 */
// class Point {
//   public x: number
//   public y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
//   public getPostion() {
//     return `(${this.x},${this.y})`
//   }
// }
// const point = new Point(1, 2)
// console.log(point) // Point {x: 1, y: 2}

// class Parent {
//   public name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Child extends Parent {
//   constructor(name: string) {
//     super(name)
//   }
// }

// 修饰符
// public 公共的，创建实例后可以通过实例访问的，在外部可以访问的属性和方法

// private 私有的
// class Parent {
//   private age: number
//   constructor(age: number) {
//     this.age = age
//   }
// }
// const p = new Parent(18)
// console.log(p.age) // 错误：属性“age”为私有属性，只能在类“Parent”中访问

// protected 受保护的
