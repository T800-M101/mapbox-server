import { Marker } from "./marker";

export class Map {

    private markers: { [key: string] : Marker } = {
        '1': {
            id: '1',
            name: 'Fernando',
            lng: -75.75512993582937,
            lat: 45.349977429009954,
            color: '#dd8fee'
          },
         '2': {
            id: '2',
            name: 'Amy',
            lng: -75.75195645527508, 
            lat: 45.351584045823756,
            color: '#790af0'
          },
          '3': {
            id: '3',
            name: 'Orlando',
            lng: -75.75900589557777, 
            lat: 45.34794635758547,
            color: '#19884b'
          }
    };

    constructor(){}

    getMarkers(): { [key: string] : Marker } {
        return this.markers;
    }

    removeMarker(id: string): { [key: string] : Marker } {
        delete this.markers[id];
        return this.getMarkers();
    }

    moveMarker(marker: Marker): void {
        this.markers[marker.id].lng = marker.lng; 
        this.markers[marker.id].lat = marker.lat; 
    }

    addMarker(marker: Marker): void {
        this.markers[marker.id] = marker;
    }

}