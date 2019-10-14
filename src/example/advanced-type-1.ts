/**
 *  高级类型
 * 1.交叉类型 2.联合类型 3.类型保护 4.null和undefined 5.类型保护和类型断言 6.类型别名 7.字面量类型 8.枚举成员类型 9.可辨识联合
 */
// 1. 交叉类型 T & U
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U
  res = Object.assign(arg1, arg2)
  return res
}
mergeFunc({ a: 'a' }, { b: 'b' })

// 2. 联合类型
// type1 | type2 | type3
const getLengthFunc = (content: string | number): number => {
  if (typeof content === 'string') { return content.length } else { return content.toString().length }
}
// console.log(getLengthFunc(false))// 报错，false 是 boolean 类型

// 3.类型保护
const valueList = [123, 'abc']
const getRandomValue = () => {
  const number1 = Math.random() * 10
  if (number1 < 5) {
    return valueList[0]
  } else {
    return valueList[1]
  }
}
const item = getRandomValue()
console.log(item)

// 使用类型保护 关键字 is ，下面表明返回的是 string类型
function isString(value: number | string): value is string {
  return typeof value === 'string'
}
if (isString(item)) {
  console.log(item.length)
} else {
  console.log(item.toFixed())
}

// 如果比较简单的可以直接使用 typeof ，只能为 string/number/boolean/symbol中的一种
if (typeof item === 'string') {
  console.log(item.length)
} else {
  console.log(item.toFixed())
}

// 也可以使用类型断言
// if ((item as string).length) {
//   console.log((item as string).length)
// } else {
//   console.log((item as number).toFixed())
// }

// 4.null和undefined
let values = '123'
// values = undefined
// string | undefined / string | null / string | undefined
const sumFunc = (x: number, y?: number): number => {
  return x + (y || 0)
}

const getLengthFunction = (value: string | null): number => {
  return (value || '').length
}
