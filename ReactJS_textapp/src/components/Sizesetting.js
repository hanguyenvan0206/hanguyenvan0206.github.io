import React, {Component} from 'react';
import {  Card, CardTitle, CardSubtitle, Button} from 'reactstrap';


class Sizesetting extends Component {

  ChangeSize(value){
    this.props.onreceiveSize(value);
  }
  onReset(value){
    this.props.onSetting(value);
  }
  render(){   
      return (
         <div className="Card">
                <CardTitle className="CardTitle">Size setting</CardTitle>
                <CardSubtitle className="CardSubtitle">
                <Button color="warning" onClick = {()=>this.ChangeSize(-2)}>Giảm</Button>
                <Button color="primary" onClick = {()=>this.ChangeSize(2)}>Tăng</Button>
                <Button color="secondary" onClick = {()=>this.onReset(true)}>Reset</Button>
                </CardSubtitle>
            </div>
      );
    
    
  }
  
}

export default Sizesetting;
