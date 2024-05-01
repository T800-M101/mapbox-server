import { Socket } from "socket.io";
import socketIO from 'socket.io';
import { Map } from '../classes/map';
import { Marker } from '../classes/marker';


export const map = new Map();

// Connect client
export const connectClient = (client: Socket, io:socketIO.Server) => {
    console.log('new user connected');
}


/* Listen to new marker
 client => is the instance of the application currently running (here we have the events thes users can do)
 io => is the server (here we have all the sockets connected)
*/
export const mapSockets = (client: Socket) => {
    client.on('new-marker', ( marker: Marker) => {
        map.addMarker(marker);
        client.broadcast.emit('new-marker', marker);
    });

    client.on('move-marker', ( marker: Marker ) => {
         map.moveMarker(marker);
         client.broadcast.emit('move-marker', marker);
    });

    client.on('remove-marker', ( id: string) => {
        map.removeMarker(id);
        client.broadcast.emit('remove-marker', id);
    });
}
