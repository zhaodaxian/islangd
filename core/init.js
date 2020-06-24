const requireDirectory = require("require-directory")
const Router = require('@koa/router')

class InitManager {
    static InitCare (app) {
        InitManager.app = app
        InitManager.InitLoadingRouter()
    }
    static InitLoadingRouter () {
        let RootSite = `${process.cwd()}/app/api/v1`
        const modules = requireDirectory(module, RootSite, {
            visit: EchoallRouter
        })
        function EchoallRouter (obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }else if (typeof(obj) === 'Object') {
                for (k in obj) {
                    if (obj[k] instanceof Router) {
                        InitManager.app.use(obj[k].routes())
                    }
                }
            }
        }
    }
}

module.exports = {
    InitManager
}