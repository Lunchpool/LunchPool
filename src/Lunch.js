import React, { Component } from 'react';
import TimeSlotPicker from './TimeSlotPicker';
import Button from '@material-ui/core/Button';
import KeyIcon from '@material-ui/icons/VpnKey';

import map from './img/map.png';
import './css/Lunch.css';
import TopBar from './TopBar';

class Lunch extends Component {
  constructor() {
    super();

    this.state = {
      0: true,
    };

    this.poolNames = {
      0: 'Everyone',
      1: 'Startup Weekend Tampa',
      2: 'Synapse Summit',
      3: 'Tampa Bay',
      4: 'KnowBe4 Secret Group',
      5: 'Only Tampa Women',
    };

    this.start = this.start.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }
  componentWillMount () {
    document.getElementsByTagName('body')[0].classList.add('lunch');
  }

  componentWillUnmount () {
    document.getElementsByTagName('body')[0].classList.remove('lunch');
  }

  start () {
    this.props.history.push('searching');
  }

  toggleButton(event) {
    let id = event.currentTarget.getAttribute('data-id');
    this.setState({
      [id]: !this.state[id],
    });
  }

  render() {
    return (
      <div>
        <TopBar />
      <div className="App">
        <h2>Choose time</h2>
        <TimeSlotPicker />
        <h2>Confirm area</h2>
        <div className="map">
          <div className="circle" />
          <img src={map} alt="map"/>
        </div>
        <h2>Pick pools</h2>
        <div className="pools">
          {[...Array(6)].map((x, i) =>
            <Button variant={this.state[i] ? 'contained' : 'outlined'} size="small" color="secondary" onClick={this.toggleButton} data-id={i} key={i}>
              {(i === 4 || i === 1) && <KeyIcon />}
              {this.poolNames[i]}
            </Button>
          )}
        </div>

        <br />
        <Button variant="contained" size="large" color="primary" id="lunch-button" onClick={this.start}>
          Let's go for lunch
        </Button>
      </div>
      </div>

    );
  }
}

export default Lunch;
