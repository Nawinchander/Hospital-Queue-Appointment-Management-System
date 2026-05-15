const express = require('express');

const cors = require('cors');

const http = require('http');

const { Server } = require('socket.io');

const app = express();

app.use(cors());

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log('Patient Connected');
});

app.get('/', (req, res) => {
  res.send('Hospital Queue API');
});

server.listen(5000, () => {
  console.log('Server Running');
});




