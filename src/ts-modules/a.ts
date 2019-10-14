export interface FuncInterface {
  name: string
  (arg: number): string
}

export class ClassC {
  constructor() { }
}

class ClassD {
  constructor() { }
}
export { ClassD }
export { ClassD as ClassNameD }

export * from './b' // 引入b导出

export { name } from './b'
export { name as NameProp } from './b'
