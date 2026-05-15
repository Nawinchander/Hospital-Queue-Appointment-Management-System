module.exports = (io) => {

  io.on('connection', (socket) => {

    socket.on(
      'join-queue',

      (roomId) => {

        socket.join(roomId);
      }
    );
  });
};

