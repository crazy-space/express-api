/*
 * @Author: luoyz
 * @Date: 2022-09-19 13:24:54
 * @LastEditors: luoyz
 * @LastEditTime: 2022-09-19 13:55:26
 * @FilePath: \crazy-space\crazy-express\src\routes\base\index.js
 */
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('基础部分')
})

module.exports = router