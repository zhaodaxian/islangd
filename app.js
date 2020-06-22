const KOA = require('koa')

const requireDirectory = require("require-directory")
const Router = require('@koa/router')

const app = new KOA()
const modules = requireDirectory(module, './api/v1', {
    visit: autoCycleRequire
})
function autoCycleRequire (obj) {
    if (obj instanceof Router) {
        app.use(obj.routes())
    }else if (typeof obj === "Object") {
        for (let k in obj) {
            if (obj[k] instanceof Router) {
                app.use(obj[k].routes())
            }
        }
    }
}

app.listen(3000)