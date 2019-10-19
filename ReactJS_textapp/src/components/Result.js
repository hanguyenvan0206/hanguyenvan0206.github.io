import React, {Component} from 'react';


class Result extends Component {
  setstyle(){
    return{
        color: this.props.color,
        borderColor: this.props.color,
        fontSize: this.props.fontSize,
        padding: this.props.fontSize
    }
    }
  render(){   
      return (
          <div className = "result">
            <p>Color: {this.props.color} - Size: {this.props.fontSize}px - Padding: {this.props.fontSize}px</p>
            <div id = "content" style = {this.setstyle()}>
             Textapp setting
            </div>
          </div>
      );
    
    
  }
  
}

export default Result;
