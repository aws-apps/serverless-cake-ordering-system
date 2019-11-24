module.exports = {
  createOrder: async(event) => {
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