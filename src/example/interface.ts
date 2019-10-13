/**
 * 接口
 *    基本用法 可选属性 多余属性检查 绕开多余属性检查
 *    只读属性 函数类型 索引类型 继承接口 混合类型接口
 */

// 1. 基本用法
interface NameInfo {
  firstName: string,
  lastName: string
}
const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}
const fullName: string = getFullName({
  firstName: 'haha',
  lastName: 'Jing',
})
console.log(fullName)

interface Vegetable {
  color?: string, // 2. 可选属性
  readonly type: string, // 5. 只读属性
  // [prop: string]: any // 4. (2)索引签名 [prop: string]: any
}
const getVegetables = ({ color, type }: Vegetable): string => {
  return `一个${color ? color : ''}的${type}`
}
// 3. 多余属性检查
// 4. (3)类型兼容性，将实例提取出来
const vegetableInfo = {
  color: 'green',
  type: 'tomato',
  size: 2,
}
let VegetableObj: Vegetable = {
  type: 'tomato',
}
// VegetableObj.type = 'carrot' // 错误，只读不可修改
console.log(getVegetables(vegetableInfo)) // 4. 绕开多余属性检查 (1)用 *类型断言* {color: 'green',...} as Vegetable

// 5. 只读属性
interface ArrInter {
  0: number,
  readonly 1: string
}
let arr11: ArrInter = [1, 'a']

// 6. 函数类型
// 此处这样写保存后会变成下面的写法，是tslint的建议写法
// interface AddFunc {
//   (num1: number, num2: number): number
// }
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

// 7. 索引类型
interface RoleDic {
  // 属性名类型 number，属性值类型 string
  [id: string]: string
}
const role1: RoleDic = {
  a: 'super_admin',
  1: 'admin',
}
// const obj5 = {
//   123: 'a',
//   '123': 'b',
// } // 123: 'b' 会覆盖掉前面的赋值

// 继承接口
interface Vegetables {
  color: string
}
interface Tomato extends Vegetables {
  radius: number
}
interface Carrot extends Vegetables {
  length: number
}
const tomato: Tomato = {
  radius: 1,
  color: 'red',
}
const carrot: Carrot = {
  color: 'green',
  length: 2,
}

// 混合类型接口
interface Counter {
  // 函数
  (): void,
  count: number
}
const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count) // 1
counter()
console.log(counter.count) // 2
counter()
console.log(counter.count) // 3
