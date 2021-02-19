const express = require('express')
const auth = require('./auth')

module.exports = function (app) {

    const protectedApi = express.Router()
    app.use('/api', protectedApi)

    // protectedApi.use(auth)

    const users = require('../api/user/userService')
    users.register(protectedApi, '/users')


    const openApi = express.Router()
    app.use('/oapi', openApi)

    const ProductsService = require('../api/products/productsService')
    ProductsService.register(openApi, '/products')


    const AuthService = require('../api/user/authService')

    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}
