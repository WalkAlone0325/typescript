/**
 *  声明合并
 * 补充知识 合并接口 合并命名空间 不同类型合并（命名空间和函数/枚举）
 */
interface InfoInter {
  name: string
  getRes(input: string): number
}
interface InfoInter {
  name: string
  getRes(input: number): string
}
let infoInter: InfoInter
infoInter = {
  name: 'dx',
  getRes(text: any): any {
    if (typeof text === 'string') { return text.length } else { return String(text) }
  },
}

// 合并命名空间
// namespace Validations {
//   export const checkNumber = () => { }
// }
// namespace Validations {
//   export const checkLetter = () => { }
// }
// 合并
namespace Validations {
  export const checkNumber = () => { }
  export const checkLetter = () => { }
}
