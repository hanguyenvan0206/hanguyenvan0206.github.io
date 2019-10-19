import React, {Component} from 'react';

import {  Button } from 'reactstrap';
class Jobdetail extends Component {
  constructor(props){
    super(props);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSetting = this.onSetting.bind(this);
  }
  onUpdateStatus (){
    this.props.onUpdateStatus(this.props.task.id)
  }
  onDelete(){
    this.props.onDelete(this.props.task.id)
  };
  onSetting(){
    this.props.onSetting(this.props.task.id)
  }
  render(){
      let { task, index } = this.props;  
      return (
            <tr>
            <th scope="row">{ index+1 }</th>
            <td>{task.name}</td>
            <td className = "text-center" ><span className={task.status === true ? "bg-warning text-dark" : "bg-success text-white"}
            onClick = { this.onUpdateStatus}>
            {task.status === true ? "Kích hoạt": "Ẩn"}</span></td>
            <td>
              <Button color="warning" onClick = {this.onSetting}>Sửa</Button>{' '}
            <Button color="danger" onClick = {this.onDelete}>Xóa</Button>{' '}</td>
            </tr>
      );

    
  }
  
}

export default Jobdetail;
