import React, {Component} from 'react';

import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import tick from '../img/tick.svg';
class Taskform extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      name : '',
      status: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancer = this.onCancer.bind(this);
  }
  componentWillMount(){ //lifecy khi gắn component chỉ gọi 1 lần duy nhất
    if(this.props.taskEdit !== null){
      this.setState({
        id: this.props.taskEdit.id,
        name : this.props.taskEdit.name,
        status: this.props.taskEdit.status
      })
    }
  }
  componentWillReceiveProps(nextProps){ // khi nhấn form thêm thì components đã hiện thị sẽ không gọi componentWillMount, sử dụng thêm - khi component đã gắn vào thì thực hiện thêm 1 props nữa
    console.log(nextProps)
    if(nextProps !=null && nextProps.taskEdit != null){
      this.setState({
        id: nextProps.taskEdit.id,
        name : nextProps.taskEdit.name,
        status: nextProps.taskEdit.status
      })
    }
  }
  offTask(value){
    this.props.offtaskform(value);
  }
  onChange(event){
    let value = event.target.value;
    let name =  event.target.name;
    if( value ==="false"){
      value = false
    }else if (value ==="true"){ value = true}
    this.setState({
      [name]: value
    });
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.offTask();
    this.setState({
      name : '',
      status: false,
    });
  }
  onCancer(){
    this.setState({
      name : '',
      status: false,
    })
  }
  render(){
    let { name, status, id} = this.state;
      return (
        <div className = 'Addjob'>
                <div className = 'Addjob-title'>
                  <h3>{ id ===''? "Thêm công việc" : "Cập nhập công việc"}</h3>
                  <img src = {tick} width = {15} height = {15} onClick = {()=>this.offTask(false)}/>
                </div>
                <Form onSubmit = {this.onSubmit}>
                  <FormGroup>
                    <Label>Tên</Label>
                    <Input type="text" 
                    name="name" 
                    placeholder="Add a new job"
                    value = { name } 
                    onChange = {this.onChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Trạng thái</Label>
                    <Input type="select" 
                    name="status" 
                    value = {status}
                    onChange = {this.onChange}
                    >
                      <option value = {false}>Ẩn</option>
                      <option value = {true}>Kích hoạt</option>
                    </Input>
                  </FormGroup>
                  <div className = 'Addbtn'>
                    <Button type = "submit" color="warning">Lưu lại</Button>{' '}
                    <Button type = "button" color="danger" onClick = {this.onCancer}>Hủy bỏ</Button>{' '}
                </div> 
                </Form>
                 
        </div>

        
      );

    
  }
  
}

export default Taskform;
