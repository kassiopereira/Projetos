/* import express from 'express';
import { createServer } from 'node:http';
import {Server, Socket} from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { Emitter } from "@socket.io/redis-emitter";
import {createClient} from "redis";

const app = express();
const server = createServer(app);

const io = new Server(server,{cors:{origin:'*'}});
const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();
const redisClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
io.adapter(createAdapter(pubClient, subClient));

});
redisClient.connect()

redisClient.subscribe('wconnector_socket.io', (message) => {
 let json = JSON.parse(message)
 console.log(message); // 'message'
 io.to(json.data.room).emit(json.event,json.data.message)
});

    io.on('connection', (socket:Socket) => {
    console.log(`a user connected ${socket.id}`);


 socket.on('event',function (event) {
 console.log(event)
 socket.rooms.forEach(function (room) {
 socket.broadcast.to(room).emit('event',event);
 })

 })

 socket.on('join', function(room) {
 socket.join(room);
 socket.emit('join','OK')
 console.log('add to romm :'+room)
 });
});

server.listen(3000, () => {
 console.log('server running at http://localhost:3000');
}); */