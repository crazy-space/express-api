/*
 * @Author: luoyz
 * @Date: 2022-09-19 13:53:28
 * @LastEditors: luoyz
 * @LastEditTime: 2022-09-19 15:40:22
 * @FilePath: \crazy-express\src\routes\files\index.js
 */
const express = require('express')
const router = express.Router()
const upload = require("express-fileupload")
const { ALLOWED_TYPE } = require('./types')
const { extname, resolve } = require("path")
const { existsSync, appendFileSync, writeFileSync, readFileSync } = require("fs")

router.use(upload())

router.get('/', (req, res, next) => {
  res.send('文件部分')
})

router.post('/upload-file', (req, res, next) => {
  const { name, type, size, fileName, uploadedSize } = req.body
  // 获取file
  const { file } = req.files

  if (!file) {
    res.send({
      code: 1001,
      msg: "No File Uploaded"
    })
    return
  }

  if (!ALLOWED_TYPE[type]) {
    res.send({
      code: 1002,
      msg: "The type is not allowed for uploading."
    })
    return
  }

  // 存储的文件名 和 存储路径
  const filename = fileName + extname(name)
  const filePath = resolve(process.cwd(), "./upload_temp/" + filename)

  if (uploadedSize !== "0") {
    if (!existsSync(filePath)) {
      res.send({
        code: 1003,
        msg: "No File Exists"
      })
      return
    }
    appendFileSync(filePath, file.data)
    res.send({
      code: 1000,
      msg: "Appended",
      data: {
        video_url: "http://localhost:5174/" + filename
      }
    })
    return
  }
  writeFileSync(filePath, file.data)

  res.send({
    code: 1000,
    msg: "File is created"
  })
})

module.exports = router