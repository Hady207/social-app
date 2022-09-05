import { Server } from 'socket.io';
import chatSocket from './chatSocket';

const socketIo = (server: any) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('client is connected now');
    chatSocket(socket);
  });

  return io;
};

export default socketIo;
