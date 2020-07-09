/**
*  定义一个中间件用来捕获全局错误
*/

const {ThrowError} = require('../core/error')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error){
    let msg = {
      path: ctx.method + ' ' + ctx.path,
      msg: error.msg || error.message,
      code: error.code || 500

    }
    console.log(msg)
    if(error instanceof ThrowError){
      ctx.body = {
        msg: error.msg,
        code: error.code,
        path: ctx.method + ' ' + ctx.path
      }
      ctx.status = error.status
    }else{
      ctx.body = {
        msg: '服务器错误:' + error.message,
        code: 99999,
        path: ctx.method + ' ' + ctx.path
      }
      ctx.status = 500
    }
    
  }
}

module.exports = catchError