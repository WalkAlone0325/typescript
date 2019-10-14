/**
 * 类型推论：基础 多类型联合 上下文类型
 * 类型兼容性：基础 函数兼容性（1.参数个数 2.参数类型 3.返回值类型 4.可选参数和剩余参数 5.参数双向协变 6.函数重载） 枚举 类 泛型
 */
// 类型推论：基础
let name11 = 'dx'

// 多类型联合
// let arr5: Array<number | string> = [1, 'a']
let arr5 = [2, 'a']
// arr5 = [2, 'a', false] // 错误：不能将类型“false”分配给类型“string | number”

// 上下文类型 根据 =左边推断 =右边的类型
// window.onmousedown = (mouse) => {
//   console.log(mouse.a)
// }

// 类型兼容性：基础
interface InfoInterface {
  name: string
}
let infos: InfoInterface
const infos1 = { name: 'dx' }
const infos2 = { age: 18 }
const infos3 = { name: 'dx', age: 18 }
infos = infos1

// 函数兼容性：1.参数个数
// let x = (a: number) => 0
// let y = (b: number, c: string) => 0
// const arrs = [1, 2, 3]
// arrs.forEach((item, index, array) => {
//   console.log(item)
// })
// arrs.forEach((item) => {
//   console.log(item)
// })

// 2. 参数类型
// let x = (a: number) => 0
// let y = (b: string) => 0
// console.log(x) // ƒ (a) { return 0; }

// 4.可选参数和剩余参数
const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
  return callback(...arr)
}
getSum([1, 2, 3], (...args): number => args.reduce((a, b) => a + b, 0))

// 5.参数双向协变
// let funcA = (arg: number | string): void => { }
// let funcB = (arg: number): void => { }
// // funcA = funcB // 报错
// funcB = funcA

// 3.返回值类型
let x = (): string | number => 0
let y = (): string => 'a'
let z = (): boolean => false
x = y
// y = x // 报错
// y = z // 报错

// 6.函数重载 下面为两个函数重载，第三个为函数体
function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
  return arg1 + arg2
}
merge(1, 2)
merge('1', '2')

/**
 * 枚举
 */
enum StatusEnum {
  On,
  Off,
}
enum AnimalEnum {
  Dog,
  Cat,
}
let s = StatusEnum.On
// s = AnimalEnum.Dog // 错误
s = 1

class AnimalClass {
  public static age: number
  constructor(public name: string) { }
}
class PeopleClass {
  public static age: number
  constructor(public name: string) { }
}
class FoodClass {
  constructor(public name: number) { }
}
let animal: AnimalClass
let people: PeopleClass
let food: FoodClass
// animal = people
// animal = food
