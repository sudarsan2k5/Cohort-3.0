"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const sww = new ws_1.WebSocketServer({ port: 8080 });
// event handler
sww.on('connection', function (socket) {
    console.log('new connection');
    setInterval(() => {
        // socket.send('Sonal price is: ' + Math.random());
    }, 1000);
    socket.on('message', (e) => {
        if (e.toString() === "hi") {
            socket.send("hello:) ");
        }
    });
});
