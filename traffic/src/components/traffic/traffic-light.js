import React, {Component} from 'react';

class TrafficLight extends Component {
  render() {
     return (
      <div className = 'title'>
        <p>{this.props.title}</p>
      </div>
     );
  }
}
export default TrafficLight