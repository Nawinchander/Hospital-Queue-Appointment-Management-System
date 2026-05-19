import ws from 'k6/ws';

export default function () {

  ws.connect(
    'ws://localhost/socket.io',

    {},

    function(socket) {

      socket.on(
        'open',

        () => {

          console.log(
            'Connected'
          );
        }
      );
    }
  );
}