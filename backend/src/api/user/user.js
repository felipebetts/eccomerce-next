const restful = require('node-restful')
const mongoose = restful.mongoose



const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, required: true },
    created_at: { type: Date, default: Date.now(), required: true },
    cart: { type: Array, default: [], required: true  },
    orders: { type: Array, default: [], required: true },
})

module.exports = restful.model('User', userSchema)