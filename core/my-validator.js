/**
*  定义一部分校验器
*/
const {ParamsError} = require('./error')


// 必传参数，params是一个必传参数名+传参方式组成的二维数组，例如：[['id', 'params'], ['uname', 'body'], ['type', 'query'], ['token', 'header']]
const requireParams = (ctx, params) => {
  params.forEach(item => {
    if(item[1] === 'params'){
      if(!ctx[item[1]][item[0]]){
        throw new ParamsError(item[0])
      }
    }else{
      // 如果body传参是多级json参数
      if(item[1] === 'body' && item[0].indexOf('.')){
        let attrArr = item[0].split('.')
        attrArr.reduce((prev, cur) => {
          if(!!prev[cur]){
            return prev[cur]
          }else{
            throw new ParamsError(cur)
          }
        }, ctx.request[item[1]])
      }else{
        if(!ctx.request[item[1]][item[0]]){
          throw new ParamsError(item[0])
        }
      }
    }
  })
}

module.exports = {
  requireParams
}