/*
 * @Author: luoyz
 * @Date: 2022-09-19 13:29:02
 * @LastEditors: luoyz
 * @LastEditTime: 2022-09-19 13:55:13
 * @FilePath: \crazy-space\crazy-express\src\routes\auth\index.js
 */
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('信息验证')
})

router.get('/user', (req, res, next) => {
  res.send('auth')
})

module.exports = router