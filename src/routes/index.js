/*
 * @Author: luoyz
 * @Date: 2022-09-19 13:14:57
 * @LastEditors: luoyz
 * @LastEditTime: 2022-09-19 14:59:26
 * @FilePath: \crazy-express\src\routes\index.js
 */
const { readdir } = require('fs')

function installRouter(app) {
  readdir(__dirname, 'utf-8', (err, data) => {
    data.forEach(item => {
      if (item.indexOf('.js') === -1) {
        let apiPath = `/api/v1/${item}`
        let apiRouter = require(`./${item}/index`)
        app.use(apiPath, apiRouter)
      }
    })
  })
}

module.exports = installRouter