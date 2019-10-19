import React, {Component} from 'react';
import './App.css';

import { Table, Button, Input, Row, Col } from 'reactstrap';
import FindandSort from './components/FindandSort';
import Taskform from './components/Taskform';
import Jobdetail from './components/Jobdetail';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: [   
      ],
      isdisplayTaskform: false,
      taskEdit: null,
      filter: {
          name: '',
          status: ''
      },
      search: ''
    }
    this.addJob = this.addJob.bind(this);
    this.offtaskform = this.offtaskform.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onUpdateStatus = this.onUpdateStatus.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSetting = this.onSetting.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('task')){
      let tasks = JSON.parse(localStorage.getItem('task'));
      this.setState({
        task: tasks
      });
    }
  }
  addJob(){
    this.setState({
      isdisplayTaskform: true,
      taskEdit: null
    })
  }
  offtaskform(value){
    this.setState({
      isdisplayTaskform: value,
      taskEdit: null
    })
  }

  id(){
    return Math.floor((1+Math.random()) * 0x100000).toString(16).substring(1);
  }
  generateID(){
    return this.id() + this.id() + '-' + this.id() + '-' + this.id() + this.id() + '-' + this.id()
  }
  onSubmit(data){
    let { task } = this.state;
    if(data.id ==''){
      data.id = this.generateID();
      task.push(data);
    }else{
      let index = this.findIndex(data.id);
      task[index]= data;
    }
    localStorage.setItem('task', JSON.stringify(task));
  }
 
  findIndex(id){
    let { task } = this.state
    let result = -1;
    task.forEach((task, index) => {
      if(task.id == id){
        result = index;
      }
    });
    return result;
  }
  onUpdateStatus(id){
    let { task } = this.state;
      let index = this.findIndex(id);
      if(index !== -1){
        task[index].status = !task[index].status;
        this.setState({
            task: task
        })
      }
      localStorage.setItem('task', JSON.stringify(task));
     
  }
  onDelete(id){
    let { task } = this.state;
    let index = this.findIndex(id);
    if(index !== -1){
        task.splice(index, 1);
        this.setState({
            task: task
        })
      }
      localStorage.setItem('task', JSON.stringify(task));
      this.offtaskform(); //   Đóng form thêm
  }
  onSetting(id){
    this.addJob(); // Mở form
    let { task } = this.state;
    let index = this.findIndex(id);
    let taskEdit = task[index];
    this.setState({
        taskEdit: taskEdit
    })
    
  }
  onChange(event){
    let { filter } = this.state
    let value = event.target.value;
    let name =  event.target.name;
    let filterName = name == 'name'? value : filter.name;
    let filterStatus = name == 'status'? value : filter.status;
    this.setState({
        filter:{
            name: filterName,
            status: filterStatus
        }
      });
    console.log(filter.name);
    console.log(filter.status);
  }
  onSearch(data){
    this.setState({
        search: data.toLowerCase()
    })
    console.log(this.state.search);
  }
  render(){
      let { task, isdisplayTaskform, taskEdit,  filter , search } = this.state;
      if(filter !== null){
          if(filter.name !== null){
              task = task.filter((task) => {
                  return task.name.toLowerCase().indexOf(filter.name) !== -1
              })
          }
          if(filter.status !==null){
            task = task.filter((task) => {
                if(filter.status == ''){
                    return task
                }else{
                    return task.status == filter.status
                }
            })
          }
      }
      if(search !==null){
        task = task.filter((task) => {
            return task.name.toLowerCase().indexOf(search) !== -1
        })
      }
      let elementtask = isdisplayTaskform === true ? 
      <Taskform isdisplayTaskform = {this.state.isdisplayTaskform} 
      offtaskform = {this.offtaskform} 
      onSubmit = {this.onSubmit}
      taskEdit = {taskEdit}
      /> : '';
      
      return (
        <div className = 'App'>
            <div className = 'Appname'>
                <h1>Quản lý công việc</h1>
            </div>
          <Row>
            <Col sm = {4}>
              {elementtask}
            </Col>
            <Col sm = {isdisplayTaskform === true ? 8 : 12}>
            <div className = 'Addmenu'>
                <Button color="success" onClick = {this.addJob}>Thêm công việc</Button>{' '}
                  <FindandSort search = {this.onSearch}/>
                  <div className = "jobdetail">
                    <Table>
                      <thead>
                          <tr>
                          <th>STT</th>
                          <th>Tên</th>
                          <th>Trạng thái</th>
                          <th>Hành động</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td><input  
                                name = 'name'
                                value = {filter.name}
                                onChange = {this.onChange}
                            /></td>
                            <td><Input type="select" 
                                name = 'status'
                                value = {filter.status}  
                                onChange = {this.onChange}
                            >
                                  <option value = {''}>Tất cả</option>
                                  <option value = {false}>Ẩn</option>
                                  <option value = {true}>Kích hoạt</option> 
                                </Input>
                            </td>
                            <td> </td>
                          </tr>
                          {
                            task.map((item, index) => {
                              return <Jobdetail key = {index} 
                              index = {index} 
                              task = {item} 
                              onUpdateStatus = {this.onUpdateStatus} 
                              onDelete = {this.onDelete}
                              onSetting = {this.onSetting}
                            />})
                         }
                      </tbody>
                    </Table>
                  </div>
             </div>
            </Col>
          </Row>
        </div> 
      ); 
  } 
}
export default App;
