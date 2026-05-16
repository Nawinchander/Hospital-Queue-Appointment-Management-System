const { Worker } =
require('bullmq');

const worker =
new Worker(

  'notifications',

  async (job) => {

    console.log(
      `Sending notification to:
      ${job.data.patient}`
    );
  },

  {
    connection: {
      host: 'redis',
      port: 6379
    }
  }
);

worker.on('completed', () => {
  console.log('Notification Sent');
});