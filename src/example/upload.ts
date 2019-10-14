/**
 * upload重要更新
 */
// Promise
function getIndexPromise(bool) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (bool) {
        resolve('a')
      } else {
        reject(Error('error'))
      }
    }, 1000)
  })
}

// async
// 使用 try catch 接收错误信息
async function asyncFunction() {
  try {
    const res = await getIndexPromise(true)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
asyncFunction()
