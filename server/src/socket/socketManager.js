let io;

const initializeSocket = (server) => {

  const socketIo = require('socket.io');

  io = socketIo(server, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', (socket) => {

    console.log(
      'Client Connected'
    );

    socket.on('disconnect', () => {

      console.log(
        'Client Disconnected'
      );
    });
  });
};

const getIO = () => {

  if (!io) {
    throw new Error(
      'Socket.io not initialized'
    );
  }

  return io;
};

module.exports = {
  initializeSocket,
  getIO
};