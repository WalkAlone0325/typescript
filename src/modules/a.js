/**
 * ES6的模块：export 、import 、export default 、import和export的符合写法
 * node.js模块：expors 、module.exports
 * 注：导出的都是声明语句
 */
// 可以逐一导出
// export const name = 'dx'
// export const age = 18
// export const address = 'shanghai'

// 全部导出
const name = 'dx'
const age = 18
const address = 'shanghai'
// 导出变量
export { name, age, address }
// 导出方法
export function func() { }
// 导出类
export class A { }

// 使用别名 as
function func1() { }
class B { }
const b = ''
export {
  func as Function1,
  B as ClassB,
  b as Stringb
}