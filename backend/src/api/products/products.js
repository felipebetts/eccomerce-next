const restful = require('node-restful')
const mongoose = restful.mongoose

const products = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    shortDescription: { type: String, required: true },
    imageSrc: { type: String, required: true },
    category: { type: String, required: true},
    createdAt: { type: Date, default: Date.now(), required: false}
})

module.exports = restful.model('Products', products)