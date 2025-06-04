const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

app.get('/', (req, res) => {
  res.json({ message: 'Product Service is running' });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Laptop' }
  ]);
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log('Product Service running on port 3000');
});
