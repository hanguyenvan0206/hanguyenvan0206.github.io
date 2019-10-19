import React, { Component} from 'react';
import {  InputGroup, InputGroupAddon, Button,  Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class FindandSort extends Component  {
  constructor(){
    super();
    this.state = ({
      filter: ''
    })
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this)
  }
  onChange(event){
    this.setState({
      filter: event.target.value
    });
  }
  onClick(){
    this.props.search(this.state.filter)
  }
render(){
  let { filter } = this.state
  return (
    <div className = "findandSort">
      <InputGroup>
        <Input value = { filter } name = 'filter' onChange = {this.onChange}/>
        <InputGroupAddon addonType="append">
        <Button color="info" onClick = {this.onClick}>Tìm kiếm</Button>{' '}
        </InputGroupAddon>
      </InputGroup>  
    </div>
    
  );
}
}
export default FindandSort;