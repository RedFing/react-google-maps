/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { connect } from 'react-redux';
import { switchShowMarkers } from '../actions/settingsActions';

class Settings extends React.Component {
  render() {
    return (
      <div className="card" id="settings">
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={this.props.showMarkers}
              onChange={this.props.switchShowMarkers}
              defaultChecked
              name="showMarkers"
            />
            <label className="form-check-label" htmlFor="showMarkers">
                Show markers
            </label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => ({ showMarkers: settings.showMarkers });

export default connect(mapStateToProps, { switchShowMarkers })(Settings);
