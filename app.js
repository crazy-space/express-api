/*
 * @Author: luoyz
 * @Date: 2022-09-19 11:20:41
 * @LastEditors: luoyz
 * @LastEditTime: 2022-09-19 15:02:26
 * @FilePath: \crazy-express\app.js
 */
const express = require('express')
const bodyParser = require("body-parser")
const allRouters = require('./src/routes/index')

// 注册app实例
const app = express()

// 跨域设置
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-origin", "*")
  res.header("Access-Control-Allow-Methods", "POST,GET")
  next()
})

// 请求体解析
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 静态路径读取文件
app.use("/", express.static("upload_temp"))

// 注册路由
allRouters(app)


module.exports = app