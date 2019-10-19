import React, {Component} from 'react';
import './Trafficlight.css';
const Red = 0;
const Orange = 1;
const Green = 2;
class Trafficlight extends Component{
    constructor(){
        super();
        this.state ={
            currentColor: Green
        }
        setInterval(()=>{
            this.setState({
                currentColor: this.getNextcolor(this.state.currentColor)  
            }); 
        }, 1000);
    }
    getNextcolor(color){
        switch(color){
            case Red:
                return Orange;
            case Orange:
                return Green;
            default:
                return Red;
        }

    }
    render(){
        const currentColor = this.state.currentColor;
        if(currentColor === Red){
        return(
            <div className = "Trafficlight">
                 <div className = "Red light active" />
                 <div className = "Orange light" />     
                 <div className = "Green light" />
            </div>)      
                }
        if(currentColor === Orange){
        return(
            <div className = "Trafficlight">
                 <div className = "Red light" />
                 <div className = "Orange light active" />     
                 <div className = "Green light" />
            </div>)      
                }
         if(currentColor === Green){
        return(
            <div className = "Trafficlight">
                 <div className = "Red light" />
                 <div className = "Orange light" />     
                 <div className = "Green light active" />
            </div>)      
                }
               
    }
}
export default Trafficlight;