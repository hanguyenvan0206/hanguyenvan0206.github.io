import React, {Component} from 'react';
import './App.css';
import Todoitem from './components/todoitem';
import tick from './img/tick.svg'

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      curentFilter: "All", // All, Active, Completed
      TodoItems: [
        {title: "Đi chợ", isComplete: true},
        {title: "Dẫn gấu đi chơi", isComplete: false},
        {title: "Nấu cơm", isComplete: false}
      ]
    }
    this.onKeyUP = this.onKeyUP.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemclick(item) {
   return(event) => {
     const isComplete = item.isComplete;
     const {TodoItems} = this.state
     const index = TodoItems.indexOf(item);
     this.setState({
       TodoItems: [
        ...TodoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...TodoItems.slice(index +1),
       ]
     })
   }
  }
  onKeyUP(event){
    if(event.keyCode ==13){//enter key
      let text = event.target.value;
      if(!text){
        return;
      }
      text = text.trim();
      if(!text){
        return;
      }
      this.setState({
        newItem: '',
        TodoItems:[
          {
            title: text,
            isComplete: false
          },
          ...this.state.TodoItems
        ]
      })
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    })

  }
  render(){

    if(this.state.TodoItems.length >0 && this.state.curentFilter == "All"){
      return (
        <div className="App">
          <div className = "header">
              <img src = {tick} width = {25} height = {25}/>
              <input type = "text" 
              value = {this.state.newItem} 
              onChange = {this.onChange}
              placeholder = "Add a new item" 
              onKeyUp = {this.onKeyUP}/>
          </div>
          {
            TodoItems.map((item, index) => <Todoitem key = {index} item = {item} onClick = {this.onItemclick(item)}/>)
          }
          <div className ="footer">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      );
    }else{
      return (
        <div className="App">
          Nothing here
        </div>
      );
    }
    
  }
  
}

export default App;
