import React from 'react';
import { Map, CircleMarker, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapTest.css';
import axios from 'axios';
import MapSportPlaceMarkerLayer from './MapSportPlaceMarkerLayer';

class MapTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: ''
    };

    this.getSportPlaces = this.getSportPlaces.bind(this);
  }

  componentDidMount() {
    this.getSportPlaces();
  }

  getSportPlaces() {
    axios
      .get('https://sportplaces.api.decathlon.com/api/v1/places?', {
        params: {
          origin: '-73.582,45.511',
          radius: 999,
          sports: 175
        }
      })
      .then(response => response.data.data.features)
      .then(data => {
        this.setState({
          api: data
        });
      });
  }

  render() {
    return (
      <div>
        <h3 style={{ textAlign: 'center' }} />
        <Map className="map" zoom={this.props.zoomCity} center={this.props.cityCenter}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {this.state.api && <MapSportPlaceMarkerLayer api={this.state.api} />}
        </Map>
      </div>
    );
  }
}

export default MapTest;
