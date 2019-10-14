/**
 *  装饰器：新的类的定义，能做为新的类的声明 @名字
 * 装饰器定义 装饰器工厂 装饰器组合 装饰器求值 类装饰器
 * 方法装饰器 访问器装饰器 属性装饰器 参数装饰器
 */
function setName() {
  console.log('get setName')
  return (target: any) => {
    console.log('setName')
  }
}
function setAge() {
  console.log('get setAge')
  return (target: any) => {
    console.log('setAge')
  }
}
// @setName()
// @setAge()
// /**
//  * 先从上到下执行 装饰器工厂，然后从下往上执行装饰器里面的逻辑
//  * get setName
//  * get setAge
//  * setAge
//  * setName
//  */
// class ClassDec { }

// 类装饰器：用于类的声明，会当做函数表达式
let sign = null
function setName1(name: string) {
  return (target: new () => any) => {
    sign = target
    console.log(target.name)
  }
}
@setName1('dx')
class ClassDec {
  constructor() { }
} // ClassDec
console.log(sign === ClassDec) // true
console.log(sign === ClassDec.prototype.constructor) // true

//
function addName(constructor: new () => any) {
  constructor.prototype.name = 'dx'
}
@addName
class ClassD { }
interface ClassD {
  name: string
}
const d = new ClassD()
console.log(d.name)
