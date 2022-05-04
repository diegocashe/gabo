const Product = require("./product.model")
const productsController = require("./products.controller")

module.exports = {
    controller: productsController,
    entity: Product,
}