const { controller: productsController } = require("../products/products.module")

module.exports = (app) => {
    app.use('/api/products', productsController);
    // return app
}