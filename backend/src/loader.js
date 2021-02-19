const app = require('./config/app')
require('./config/database')
const routes = require('./config/routes')
routes(app)