const Router = require('koa-router')
const fs = require('fs')
const color = require('../../public/data/color')

const router = new Router({
  prefix: '/api'
})

router.get('/color', async ctx => {
  ctx.body = {
    data: color,
    status: 200,
    msg: 'success'
  }
})

router.get('/md/list', async ctx => {
  let query = ctx.request.query
  const files = fs.readdirSync(process.cwd() + '/public/md' + query.url)
  ctx.body = {
    data: files,
    status: 200,
    msg: 'success'
  }
})

router.get('/md', async ctx => {
  let query = ctx.request.query
  const files = fs.readFileSync(process.cwd() + '/public/md' + query.url + '/' + query.name)
  ctx.body = {
    data: String(files),
    status: 200,
    msg: 'success'
  }
})

router.get('/svg', async ctx => {
  const files = fs.readdirSync(process.cwd() + '/public/iconfont/svg')
  let svgNameList = files.filter(item => item.indexOf('.svg')>0)
  let svgList =  svgNameList.map(item => {
    return {
      name: item,
      content: String(fs.readFileSync(process.cwd() + '/public/iconfont/svg/' +item))
    }
  })
  ctx.body = {
    data: svgList,
    status: 200,
    msg: 'success'
  }
})

module.exports = router