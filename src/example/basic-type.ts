// 布尔类型
// let bool: boolean = false
let bool: boolean
bool = true

// 数值类型
let num: number = 123
num = 0b11011
num = 0o173
num = 0x7b

// 字符串类型
let str: string
str = 'abc'
str = `数值是${num}`
console.log(str) // 数值是123

// 数组类型
let arr1: number[]
arr1 = [11]
let arr2: number[]
// 此处的 () 若省去，则会认为是字符串或者数字类型的数组，而不是字符串或者数字类型组成的数组
let arr3: Array<string | number>
arr3 = [1, 'a']

// 元组类型
let tuple: [string, number, boolean]
// 此处的元素必须的一一对应的
// tuple = ['a', true, true] // 错误
// tuple = ['a', true, true, 1] // 错误
tuple = ['a', 12, true]

// 枚举类型 默认从 0 开始，也可以自己指定，若指定第一个，后面会自动 +1
enum Roles {
  SUPER_ADMIN, // 0
  ADMIN, // 1
  USER, // 2
}
console.log(Roles.USER) // 2
console.log(Roles[1]) // ADMIN
// enum Roles {
//   SUPER_ADMIN, // 0
//   ADMIN = 3, // 3
//   USER // 4
// }
// console.log(Roles.SUPER_ADMIN, Roles.USER) // 0 4
// console.log(Roles[0], Roles[4]) // SUPER_ADMIN USER

// enum Roles {
//   SUPER_ADMIN = 1, // 1
//   ADMIN = 5, // 5
//   USER = 3 // 3
// }
// console.log(Roles.USER) // 3
// console.log(Roles[3]) // USER

// any类型，任意类型
let value: any
value = true
value = 123
value = '123'
const arr4: any[] = [1, 'a', false]

// void类型，不是任何类型
const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
// 在 tsconfig.json 的 "strict": true 模式下 null 不能赋值给 void 类型
// v = null // 错误
consoleText('asas') // asas

// null undefined
let u: undefined
let n: null = null

// console.log('``````')

// never类型，永远不存在的值的类型， 不能就其他类型赋值给 never 类型，但 never 类型可以赋值给其他类型
const errorFunc = (message: string): never => {
  // 抛出错误
  throw new Error(message);
}
const infiniteFunc = (): never => {
  // 死循环
  while (true) { }
}
// const neverVariable = ((): never => {
//   // 死循环
//   while (true) { }
// })()
// neverVariable = 123 // 错误
// num = neverVariable

// object
// 变量 obj 存的是 内存地址的引用
let obj = {
  name: 'dx',
}
console.log(obj) // dx
let obj2 = obj
obj2.name = 'L'
console.log(obj) // L
function getObject(obj: object): void {
  console.log(obj)
}
getObject({ name: 'sss' })

// 类型断言
const getLength = (target: string | number): number => {
  // 此处传入 字符串 或者 数字。判断返回 字符串 或 数字的长度，但是 数字 默认是没有 length 属性的，所以会报错，因此需要用类型断言
  // 方式：(<类型>变量)  或者 (变量 as 类型) 注：jsx中只能用 as
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}
console.log(getLength('sss'), getLength(1234)) // 3 4
