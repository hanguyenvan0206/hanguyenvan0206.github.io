import React, {Component} from 'react';
import './App.css';
import Trafficlight from './components/Trafficlight';

class App extends Component {
 
  render(){   
      return (
        <div className="App">
          <Trafficlight />
        </div>
      );
    
    
  }
  
}

export default App;
