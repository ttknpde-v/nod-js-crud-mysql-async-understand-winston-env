const serviceRestModules = require('../service/ServiceRestModules'), ServiceRestModules = new serviceRestModules()
const logger = require('../log/Logging')
const routerBookStore = require('../router/router-bookstore')
class Test {
    #bodyParser
    #application
    constructor() {
        this.#bodyParser = ServiceRestModules.bodyParser
        this.#application = ServiceRestModules.express()
    }
    get test() {
        this.#application.use('/api',routerBookStore).listen( 3000 , error => {
            if (error) {
                logger.debug('the problem has had in port 3000 : '+error.message)
            }
            else {
                logger.silly('you are in port 3000')
            }
        })
    }
}

new Test().test