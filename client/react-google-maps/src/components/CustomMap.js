import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { connect } from 'react-redux';
import CustomMarker from './CustomMarker';
import { loadMarkers, selectMarker } from '../actions/markersActions';

const mapStateToProps = ({ markers, settings: { showMarkers } }) => ({
  markers: markers.items, showMarkers,
});

const CustomMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100vh' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  connect(mapStateToProps, { loadMarkers, selectMarker }),
  lifecycle({
    componentDidMount() {
      this.props.loadMarkers();
    },
  }),
)(props =>
  (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 43.856303, lng: 18.413101 }}
    >
      {props.showMarkers &&
       props.markers.map(markerData => (
         <CustomMarker
           key={markerData.id}
           {...markerData}
           onClick={markerId => props.selectMarker(markerId)}
         />
       ))
      }
    </GoogleMap>
  ));


export default CustomMap;
