const KOA = require('koa')
const classic = require('./api/v1/classic')
const book = require('./api/v1/book')

const app = new KOA()

app.use(classic.routes())
app.use(book.routes())
app.listen(3000)