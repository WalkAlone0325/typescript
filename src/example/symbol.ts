/**
 * Symbol 表示一个 独一无二 的值，它与其它值都不相同
 */
// 注：不需要使用 new
const s1 = Symbol()
console.log(s1) // Symbol()
const s2 = Symbol()
console.log(s2)
// console.log(s1 === s2) // false

const s3 = Symbol('dx')
console.log(s3) // Symbol('dx')
const s4 = Symbol('dx')
// console.log(s3 === s4) // false

// symbol 可以转为 string 或者 boolean
console.log(s4.toString()) // Symbol(dx)
console.log(typeof (s4.toString())) // string
console.log(typeof (s4)) // symbol
console.log(Boolean(s4)) // true
console.log(!s4) // false

// 在 symbol 中，不能做运算
// s4 + 10 // 错误

let prop = 'name'
const info = {
  name: 'dx', // {name: "dx"}
  [prop]: 'dx', // {name: "dx"} 上下两种输出是一样的
  [`my${prop}is`]: 'dx' // {mynameis: "dx"}
}
console.log(info)

const s5 = Symbol('name')
const info2 = {
  [s5]: 'dx1',
  age: 18,
  sex: 'man'
}
console.log(info2) // {age: 18, sex: "man", Symbol(name): "dx1"}
info2[s5] = 'dx2'
console.log(info2) // {age: 18, sex: "man", Symbol(name): "dx2"}

// 以下四种方法都无法获取到 [s5]: 'dx1' 这个属性
for (const key in info2) {
  console.log(key) // age sex
}

console.log(Object.keys(info2)) // ["age", "sex"]
console.log(Object.getOwnPropertyNames(info2)) // ["age", "sex"]
console.log(JSON.stringify(info2)) // {"age":18,"sex":"man"}

// 可以获取到 [s5]: 'dx1' 的方法
console.log(Object.getOwnPropertySymbols(info2)) // [Symbol(name)]
console.log(Reflect.ownKeys(info2)) // ["age", "sex", Symbol(name)]

// Symbol 的两个方法 Symbol.for()  Symbol.keyFor()
const s6 = Symbol('dx')
const s7 = Symbol('dx') // s6 === s7  false

const s8 = Symbol.for('dx')
const s9 = Symbol.for('dx') // s8 === s9  true
const s10 = Symbol.for('haha') // s9 === s10  false

console.log(Symbol.keyFor(s6)) // undefined
// 注：必须是通过 Symbol.for() 创建的才能通过 Symbol.keyFor() 拿到 标识
console.log(Symbol.keyFor(s10)) // haha


/**
 * 11 个内置的 Symbol 值
 */
// Symbol.hasInstance        instanceof
const obj1 = {
  [Symbol.hasInstance](otherObj: object) {
    console.log(otherObj) // {a: "a"}
  }
}
console.log({ a: 'a' } instanceof (obj1 as any)) // false

// Symbol.isConcatSpreadable
let arr: any[] = [1, 2]
console.log(([] as any).concat(arr, [3, 4])) // [1, 2, 3, 4]
console.log(arr[(Symbol.isConcatSpreadable as any)]) // undefined
arr[(Symbol.isConcatSpreadable as any)] = false
console.log(([] as any).concat(arr, [3, 4])) // [Array(2), 3,  4]

console.log(arr[(Symbol.isConcatSpreadable as any)]) // false

