const orderManager = require('./order-manager');

module.exports = {
  createOrder: async(event) => {
    const {body} = event;
    const order = orderManager.createOrder(body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hey there, Hello from cake-ordering-system, we have received your order!!',
        input: event,
      },
      null,
      2
      ),
    }
  }
};