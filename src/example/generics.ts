/**
 * 泛型：使 api 支持多种类型的数据，同时支持很好的类型结构的检查
 *  简单使用
 *  泛型变量
 *  泛型类型
 *  泛型约束
 *  在泛型约束中使用类型参数
 */
// 以 value 为值， times 为个数的数组
// const getArray = (value: any, times: number = 5): any[] => {
//   return new Array(times).fill(value)
// }

// console.log(getArray(2)) // [2, 2, 2, 2, 2]
// console.log(getArray(2, 4)) // [2, 2, 2, 2]

// // 注：此处因为传入的是 数字number ，没有 length 属性，所以打印出 undefined
// getArray(2, 4).map((item) => item.length)
// console.log(getArray(2, 4).map((item) => item.length)) // [undefined, undefined, undefined, undefined]

// // 注：此处因为传入的是 字符串string ，有 length 属性，所以打印出 [3, 3, 3, 3]
// getArray('abc', 4).map((item) => item.length)
// console.log(getArray('abc', 4).map((item) => item.length)) // [3, 3, 3, 3]

/**
 * 泛型：在函数的定义前面加 泛型变量<T>， 是在调用函数的时候，手动传入 一个类型，<T>代表一种固定的一种类型。 函数调用 *方法名<传入的类型>()*
 * @param value T
 * @param times number
 */
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}
// getArray<number>(123, 4).map((item) => item.length) // 错误：类型“number”上不存在属性“length”
getArray<number>(123, 4).map((item) => item.toFixed())
console.log(getArray<number>(123, 4).map((item) => item.toFixed())) // ["123", "123", "123", "123"]

// 两个泛型变量, 返回的是一个 元组Array<[T, U]>
const getArray1 = <T, U>(params1: T, parmas2: U, times1: number): Array<[T, U]> => {
  // fill() 填充
  return new Array(times1).fill([params1, parmas2])
}
// 调用时可以不传 <> ，默认会根据 实参 判断数据类型
getArray1<number, string>(1, 'a', 3).forEach((item) => {
  console.log(item[0]) // 1
  console.log(item[1]) // a
})
console.log(getArray1(1, 'a', 3)) // [[1, "a"],[1, "a"],[1, "a"]]

// 3. 泛型定义 函数类型
let getArray2: <T>(arg: T, times: number) => T[]
getArray2 = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}
// getArray2(123, 3).map((item) => item.length) // 错误，数字不存在length属性

// 类型别名。 返回为 T 类型的 数组，调用直接写入 类型 方法名: 类型别名
type GetArray = <T>(arg: T, times: number) => T[]
let getArray3: GetArray = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}

// 接口定义泛型函数类型
// 两种方式一样
// interface GetArray2 {
//   <T>(arg: any, times: number): T[]
// }

// type GetArray2 = <T>(arg: any, times: number) => T[]
// 如果泛型<T> 写着外边，则里面的属性都可以使用 泛型变量
interface GetArray2<T> {
  (arg: any, times: number): T[],
  array: T[]
}

// 4. 泛型约束
interface ValueWithLength {
  length: number
}
// 约束其传入的不能是 数字
const getArray4 = <T extends ValueWithLength>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg)
}
getArray4([1, 3], 4)
// getArray4(123, 4) // 不能传入 数字
getArray4('ass', 4)
getArray4({
  length: 3, // 也可以手动传入一个对象
}, 3)

// 5. 在泛型约束中使用类型参数
// const getProps = (object: any, propName: string) => {
//   return object[propName]
// }
// const objs = {
//   a: 'a',
//   b: 'b',
// }
// getProps(objs, 'a') // 打印 a
// getProps(objs, 'c') // 打印 undefined 但是不报错，想要有提示信息
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}
const objs = {
  a: 'a',
  b: 'b',
}
getProps(objs, 'a') // 打印 a
// getProps(objs, 'c') // 报错：类型"c"的参数不能赋给类型“"a" | "b"”的参数。
