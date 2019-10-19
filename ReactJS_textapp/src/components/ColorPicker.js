import React, {Component} from 'react';
import {  CardTitle, CardSubtitle} from 'reactstrap';

class ColorPicker extends Component {
  constructor(){
    super();
    this.state ={
      colors: ['red', 'blue', 'Orange', 'green', 'gray', 'pink', 'black']
    }
  }
  showColor(color){
    return{
      backgroundColor: color // set background của từng span
    }
  }
  setActivecolor(color){
    this.props.onreceiveColor(color); // truyền color ngược lại App
  }
  render(){ 
    let element =   this.state.colors.map((color, index) =>{
      return <span 
      key = {index} 
      style = {this.showColor(color)}
      className = {this.props.color === color ? "active" : ""}// thêm class Active
      onClick ={()=> this.setActivecolor(color)} // truyền color ngược lại App
      ></span>
      
    })
      return (
            <div className="Card">
                <CardTitle className="CardTitle">Color Picker</CardTitle>
                <CardSubtitle className="CardSubtitle">
                  {element}
                </CardSubtitle>
            </div> 
      );
    
    
  }
  
}
export default ColorPicker;
