import React from 'react';
import { Marker } from 'react-google-maps';
import CustomInfoWindow from './CustomInfoWindow';
import caricon from '../assets/caricon.png';
import bicycleicon from '../assets/bicycleicon.png';

// TODO: fix icon selection to support more than 2 types
class CustomMarker extends React.Component {
  render() {
    const {
      isOpen, position, icon, id, category, ...infoWindowProps
    } = this.props;

    return (
      <Marker
        position={{ lat: position.lat, lng: position.lng }}
        icon={category === 'cars' ? caricon : bicycleicon}
        onClick={() => this.props.onClick(id)}
      >
        {isOpen && <CustomInfoWindow {...infoWindowProps} />}
      </Marker>
    );
  }
}

export default CustomMarker;
