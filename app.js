
'use strict'

const config = require('./config')
const Koa = require('koa')

const app = new Koa()

const port = config.port
app.listen(port)
console.info('port:', port)
