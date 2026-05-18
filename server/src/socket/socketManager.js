
const { createAdapter } =
require('@socket.io/redis-adapter');

const { createClient } =
require('redis');

let io;

const initializeSocket =
async (server) => {

  const socketIo =
    require('socket.io');

  io = socketIo(server, {
    cors: {
      origin: '*'
    }
  });

  const pubClient =
    createClient({
      url: 'redis://redis:6379'
    });

  const subClient =
    pubClient.duplicate();

  await pubClient.connect();

  await subClient.connect();

  io.adapter(
    createAdapter(
      pubClient,
      subClient
    )
  );

  io.on(
    'connection',

    (socket) => {

      console.log(
        'Socket Connected'
      );
    }
  );
};

const getIO = () => io;

module.exports = {
  initializeSocket,
  getIO
};


// let io;

// const initializeSocket = (server) => {

//   const socketIo = require('socket.io');

//   io = socketIo(server, {
//     cors: {
//       origin: '*'
//     }
//   });

//   io.on('connection', (socket) => {

//     console.log(
//       'Client Connected'
//     );

//     socket.on('disconnect', () => {

//       console.log(
//         'Client Disconnected'
//       );
//     });
//   });
// };

// const getIO = () => {

//   if (!io) {
//     throw new Error(
//       'Socket.io not initialized'
//     );
//   }

//   return io;
// };

// module.exports = {
//   initializeSocket,
//   getIO
// };