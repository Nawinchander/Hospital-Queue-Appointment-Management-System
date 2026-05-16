const { Queue } = require('bullmq');

const notificationQueue =
new Queue(
  'notifications',
  {
    connection: {
      host: 'redis',
      port: 6379
    }
  }
);

module.exports =
notificationQueue;