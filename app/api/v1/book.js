const Router = require('@koa/router')

const router = new Router()

router.get('/book/latest', (ctx, next) => {
    ctx.body = {key: "图书接口"}
})

router.get('/aoligei', (ctx, next) => {
    ctx.body = {key: "最后的一个测试接口"}
})

module.exports = router