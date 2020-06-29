import React , {Component} from 'react';
import './App.css';
import TrafficLight from './components/traffic/TrafficLight'

class App extends Component {
  constructor() {
     super();
  }
  render() {
    return (
      <div className='App'>
       <TrafficLight/>
      </div>
    );
  }
}

export default App;
