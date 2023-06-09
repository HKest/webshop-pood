import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.4231, 24.7991]}>
        <Popup>
          <a href='https://www.google.com/maps/place/Tasku/@58.3779011,26.7221192,15z/data=!3m1!4b1!4m6!3m5!1s0x46eb36de8f30aa61:0xac1894becb0a4ccc!8m2!3d58.3778901!4d26.7308525!16s%2Fg%2F125_j5pv_'>  Ülemiste keskus. <br /> Avatud 9-20
          </a>
        </Popup>
      </Marker>
      <Marker position={[59.4277, 24.7193]}>
        <Popup>
          Kristiine keskus. <br /> Avatud 10-21
        </Popup>


        
      </Marker>

      <Marker position={[58.3783, 26.7307]}>
        <Popup>
          Tasku keskus. <br /> Avatud 9-19
        </Popup>
      </Marker>
    </MapContainer>
  </div>)
}

export default Map; 