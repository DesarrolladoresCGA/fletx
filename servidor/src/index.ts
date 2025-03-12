import express from 'express';
import {createServer} from 'node:http';
import {Server} from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server,{cors:{origin:"*"}});

server.listen(3000, ()=> {
    console.log("Servidor conectado en el puerto 3000");
});

//escuchar el evento
/*io.on("connection", (socket)=>{
    console.log("Nueva conexion");
    socket.emit("menaje desde el servidor");
    socket.on("Mensaje custom",() => console.log("Recibi un mensaje custom"));    

});*/

io.on("connection", (socket) => {
    console.log("Nueva conexión:", socket.id);

    // Escuchar mensaje de un usuario y enviarlo a los demás
    socket.on("mensajeCliente", (data) => {
        console.log("Mensaje recibido:", data);
        io.emit("mensajeCliente", data); // Enviar a todos los clientes
    });

    socket.on("disconnect", () => {
        console.log("Usuario desconectado:", socket.id);
    });
});