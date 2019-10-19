import React, {Component} from 'react';
import './App.css';
import {  Row, Col } from 'reactstrap';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';
import Sizesetting from './components/Sizesetting';

class App extends Component {
  constructor(){
    super();
    this.state ={
      color: 'red',
      fontSize: 12
    }
    this.onSetcolor = this.onSetcolor.bind(this);
    this.onSetsize = this.onSetsize.bind(this);
    this.onSettingdefault = this.onSettingdefault.bind(this);
  }
  onSetcolor(value){
        this.setState({
            color: value
        })
  }
  onSetsize(value){
    this.setState({
        fontSize: this.state.fontSize + value >=8 && this.state.fontSize + value <=36 ? this.state.fontSize + value: this.state.fontSize
    })
  }
  onSettingdefault(value){
      if(value == true){
        this.setState({
            color: 'red',
            fontSize: 12
        }) 
      }
  }
  render(){ 
      return (
            <div className="App">
                <Row className="Row">
                    <Col sm = {6} className="Col" >
                        <ColorPicker color = {this.state.color} 
                        onreceiveColor = {this.onSetcolor} 
                        />
                    </Col>
                    <Col sm = {6} className="Col">
                        <Sizesetting onreceiveSize = {this.onSetsize} onSetting = {this.onSettingdefault}/>
                    </Col>
                </Row>
                <Result color = {this.state.color} fontSize = {this.state.fontSize}/>
            </div> 
      );
    
    
  }
  
}
export default App;
