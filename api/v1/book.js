const Router = require('@koa/router')

const router = new Router()

router.get('/book/latest', (ctx, next) => {
    ctx.body = {key: "图书接口"}
})

module.exports = router