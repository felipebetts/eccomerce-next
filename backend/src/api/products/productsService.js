const Products = require('./products')
const errorHandler = require('../common/errorHandler')

Products.methods(['get', 'post', 'put', 'delete'])
Products.updateOptions({ new: true, runValidators: true })

module.exports = Products