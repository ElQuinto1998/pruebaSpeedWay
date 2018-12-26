const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    code_ref: String,
    description: String,
    price: Number,
    price_dolar: Number,
    available: Boolean
});

module.exports = mongoose.model('sw_products' ,ProductSchema);