const restful = require('node-restful')
const mongoose = restful.mongoose


const cartProductSchema = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    shortDescription: { type: String, required: true },
    imageSrc: { type: String, required: true },
    category: { type: String, required: true},
    createdAt: { type: Date, default: Date.now(), required: false},
    quantity: { type: Number, default: 1, required: true}
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 6, required: true },
    created_at: { type: Date, default: Date.now(), required: true },
    cart: [cartProductSchema],
    orders: { type: Array, default: [], required: true },
})

module.exports = restful.model('User', userSchema)