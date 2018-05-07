module.exports = (app) => {
    const order = require('../controllers/order.controller.js');

    // Create a new Order Item
    app.post('/order', order.create);

    // Delete a Menu with MenuId
    app.delete('/order/:User/:OrderID', order.delete);
}