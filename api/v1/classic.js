const Router = require('@koa/router')

const router = new Router()

router.get('/class/latest', (ctx, next) => {
    ctx.body = {key: "牛逼666"}
})

module.exports = router