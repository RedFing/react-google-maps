import React from 'react';
import { InfoWindow } from 'react-google-maps';

import './CustomInfoWindow.css';

const CustomInfoWindow = props => (
  <InfoWindow>
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.productImg} alt="Infobox" />
      <div className="card-body">
        <h5 className="card-title">{props.header}</h5>
        <p className="card-text">{props.description}
        </p>
        <h6>{props.price}</h6>

      </div>
    </div>
  </InfoWindow>
);


export default CustomInfoWindow;
