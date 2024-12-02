import { WebSocketServer } from "ws";

const sww = new WebSocketServer({ port: 8080});

// event handler
sww.on('connection', function (socket){
    console.log('new connection');

    setInterval(() => {
        // socket.send('Sonal price is: ' + Math.random());
    }, 1000);

        socket.on('message', (e) => {
            if(e.toString() === "hi"){
                socket.send("hello:) ");
            }
        })
    
});