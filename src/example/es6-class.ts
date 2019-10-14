// ES5 中实现继承
// function Food() {
//   this.type = 'food'
// }
// Food.prototype.getType = function() {
//   return this.type
// }
// function Vegetables(name) {
//   this.name = name
// }
// Vegetables.prototype = new Food()
// const tomato = new Vegetables('tomato')
// console.log(tomata.getType())

// ES6 中实现继承
// class Parent {
//   constructor(name) {
//     this.name = name
//   }
//   getName() {
//     return this.name
//   }
//   static getNames() {
//     return this.name
//   }
// }
// // 在super中传入的参数相当于在父类的构造函数中传入的参数
// class Child extends Parent {
//   constructor(name, age) {
//     super(name)
//     this.age = age
//   }
// }
// const c = new Child('dx', 18)
// console.log(c)
// console.log(c.getName())
// 继承了父类创建的子类，既是子类的实例，也是父类的实例，子类也会将父类的静态方法也会继承
// console.log(c instanceof Child) // true
// console.log(c instanceof Parent) // true
// console.log(Child.getNames()) // Child

// getPrototypeOf() 获取构造函数的原型对象
// Object.getPrototypeOf(Child) === Parent // true

/**
 * super 作为 函数 的使用
 *       作为 对象 的使用
 *  在 普通方法 中 -》父类的原型对象
 *  在 静态方法static 中 -》父类
 * 在子类中必须先调用 super() ，这样 子类才能将属性和方法加到 this 上
 */
// class Parent {
//   constructor() {
//     this.type = 'parent'
//   }
//   getName() {
//     return this.type
//   }
// }
// Parent.getType = () => {
//   return 'is parent'
// }
// class Child extends Parent {
//   constructor() {
//     super()
//     console.log('constructor: ' + super.getName())
//   } // constructor: parent
//   getParentName() {
//     console.log('getParentName: ' + super.getName())
//   } // getParentName: parent
//   // getParentType() {
//   //   console.log('getParentType: ' + super.getName()) // 报错
//   // }
// }
// const c = new Child()
// c.getParentName()
// c.getParentType()

/**
 * prototype
 * __proto__
 */
// ES5
// var obja = new Object()
// console.log(obja.__proto__ === Object.prototype) // true

// ES6 子类的__proto__指向父类本身
// 子类的 prototype 属性的 __proto__ 指向父类的 prototype属性
// 实例的__proto__属性的__proto__指向父类实例的__proto__

/**
 * 原生构造函数的继承
 *    在ES5中不能继承原生构造函数，如：
 *      Boolean  Number String Array Date Function RegExp Error Object
 *    在ES6 中能继承原生的构造函数
 */
// class CustomArray extends Array {
//   constructor(...args) {
//     super(...args)
//   }
// }
// const arr = new CustomArray(3)
// arr.fill(2)
