const Router = require('koa-router')
const fs = require('fs')

const router = new Router({
  prefix: '/api'
})

router.get('/md/list', async ctx => {
  let query = ctx.request.query
  const files = fs.readdirSync(`${process.cwd()}/public/${query.project}/md${query.url}`)
  ctx.body = {
    data: files,
    status: 200,
    msg: 'success'
  }
})

router.get('/md', async ctx => {
  let query = ctx.request.query
  const files = fs.readFileSync(`${process.cwd()}/public/${query.project}/md${query.url}/${query.name}`)
  ctx.body = {
    data: String(files),
    status: 200,
    msg: 'success'
  }
})

router.get('/svg', async ctx => {
  let query = ctx.request.query
  const files = fs.readdirSync(`${process.cwd()}/public/${query.project}/iconfont/svg`)
  let svgNameList = files.filter(item => item.indexOf('.svg')>0)
  let svgList =  svgNameList.map(item => {
    return {
      name: item,
      content: String(fs.readFileSync(`${process.cwd()}/public/${query.project}/iconfont/svg/${item}`))
    }
  })
  ctx.body = {
    data: svgList,
    status: 200,
    msg: 'success'
  }
})

module.exports = router