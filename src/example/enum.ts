import { resolve } from "url"

/**
 *  enum
 * 数字枚举 反向映射 字符串枚举 异构枚举
 * 枚举成员类型和联合枚举类型 运行时枚举 （const enum）
 */
// 数字枚举 反向映射
enum Status {
  Uploading, // 0
  Success, // 1
  Failed, // 2
}
// 上下两种方式一样
console.log(Status.Uploading)
// console.log(Status['Uploading'])

// 字符串枚举
enum Message {
  Error = 'Sorry, error',
  Success = 'success',
  Failed = Error,
}
console.log(Message.Success) // Sorry, error

// 异构枚举
enum Result {
  Failed = 0,
  Success = 'success',
}

/**
 * 枚举成员类型和联合枚举类型
 *  1. enum E { A }
 *  2. enum E { A = 'a' }
 *  3. enum E { A = -1 }
 */
enum Animals {
  Dog = 1,
  Cat = 2,
}
interface Dog {
  type: Animals.Dog
}
const dog: Dog = {
  type: Animals.Dog,
}
// const dog: Dog = {
//   type: Animals.Cat,
// } // 类型不匹配
enum Sattus {
  Off,
  On,
}
interface Light {
  status: Sattus
}
const light: Light = {
  status: Sattus.Off,
}

// 运行时枚举 可当做一个对象
// const enum
const enum Animals1 {
  Dog = 1,
}
