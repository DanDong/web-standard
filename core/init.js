/**
* 核心初始化方法——遍历所有的api
*/

const requireDirectory = require('require-directory')
const Router = require('koa-router')

class Initmanager{
  static initCore(app){
    this.app = app
    this.initLoadRouter()
  }
  static initLoadRouter(){
    const path = process.cwd() + '/app/api'
    requireDirectory(module, path, {visit: this.whenLoadModule})
  }
  static whenLoadModule(router){
    if(router instanceof Router){
      Initmanager.app.use(router.routes())   // 这里不能用this，可能是requireDirectory内部封装了visit的方法
    }
  }
}

module.exports = Initmanager