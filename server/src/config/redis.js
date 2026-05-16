const redis = require('redis');

const client = redis.createClient({
  url: 'redis://redis:6379'
});

client.connect();

client.on('connect', () => {
  console.log('Redis Connected');
});

module.exports = client;

