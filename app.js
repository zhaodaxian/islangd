const KOA = require('koa')

const app = new KOA()

app.use((ctx, next) => {
    console.log('奥利给')
    next()
})

app.use((ctx, next) => {
    console.log('亲爱的你慢慢飞')
    next()
})

app.listen(3000)