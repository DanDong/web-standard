const Koa = require('koa')
const path = require('path')
const cors = require('koa2-cors')
const parser = require('koa-bodyparser')
const static = require('koa-static')
const InitManager = require('./core/init')
const catchError = require('./middle/catch')
const { port } = require('./config')

const app = new Koa()
app.use(catchError)
app.use(parser())
app.use(cors())
app.use(static(path.join(__dirname)+'/public/'))
InitManager.initCore(app)


app.listen(port, () => {
  console.log('Serve in ' + port)
})