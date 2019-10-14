/**
 *  TS的模块
 * 模块：export 、import 、export default 、export = 和import xx = require()
 * 命名空间：定义和使用 拆分为多个文件
 * 别名
 * 模块解析：相对和非相对模块导入 模块解析策略 模块解析配置项
 */
// 模块
// import { name } from './b'
import * as info from './b'
console.log(info)

import name = require('./c')

// 命名空间, ///指明
/// <reference path="space.ts">
