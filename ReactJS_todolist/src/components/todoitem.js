import React, {Component} from 'react';
import check from '../img/check.svg';
import checkDone from '../img/checkdone.svg';
import './todoitem.css';
class TodoItem extends Component{
 
    render(){
        let url = check;
        const {item, onClick} = this.props;
        let className = 'TodoItem';
        if(item.isComplete){
            className += ' TodoItem-complete';
            url = checkDone;
        }
        return( 
            <div onClick = {onClick} className = {className}>
            <img src ={url} width = {32} height = {32}/>
            <p>{this.props.item.title}</p>
            </div>
        )
    }
}
export default TodoItem;