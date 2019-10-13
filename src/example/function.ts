/**
 * 函数
 *      函数类型                        参数                      重载
 *    1. 为函数定义类型               1. 可选参数
 *    2. 完整的函数类型               2. 默认参数
 *    3. 使用 接口定义函数类型         3. 剩余参数
 *    4. 使用类型别名
 */
// 1. 为函数定义类型
function add2(arg1: number, arg2: number): number {
  return arg1 + arg2
}
// const add3 = (arg1: number, arg2: number): number => arg1 + arg2

// 2. 完整的函数类型
let add4: (x: number, y: number) => number
add4 = (arg1: number, arg2: number): number => arg1 + arg2
// 此处添加全局变量 arg3 ，在下面使用是时候不需要在参数里面填
let arg3 = 3
add4 = (arg1: number, arg2: number): number => arg1 + arg2 + arg3

// 3. 使用 接口定义函数类型
// interface Add {
//   (x: number, y: number): number
// }
type Add = (x: number, y: number) => number
let addFunc: Add
addFunc = (arg1: number, arg2: number) => arg1 + arg2

// 1. 可选参数
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
let addFunction: AddFunction

addFunction = (x: number, y: number) => x + y
// addFunction = (x: number, y: number, z: number) => x + y + z

// 2. 默认参数 此处有默认值时可以不写类型，会默认以 默认值 的类型为准
let addFunctions = (x: number, y = 3) => x + y
console.log(addFunctions(1)) // 4
console.log(addFunctions(1, 5)) // 6
// console.log(addFunctions(1, 'sss')) // 错误

// 3. 剩余参数
// const handleData = (arg1: number, ...args: number[]) => {
//   // ...
// }

// 1. 函数重载 只能用 function 定义
// 下面两个为函数重载
function handleData(x: string): string[]
function handleData(x: number): number[]
// 函数实体
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map((item: any[]) => Number(item))
  }
}
console.log(handleData('abc')) // ["a", "b", "c"]
console.log(handleData(123)) // [1, 2, 3]
