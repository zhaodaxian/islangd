const KOA = require('koa')
const { InitManager } = require('./core/init')

const app = new KOA()

InitManager.InitCare(app)
app.listen(3000)