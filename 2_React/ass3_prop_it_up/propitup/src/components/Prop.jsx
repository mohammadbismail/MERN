import React, {Component} from 'react';

class Prop extends Component{
    render(){
        return<div>
           <h1>{this.props.fname},{this.props.lname}</h1> 
           <p>{this.props.age}</p>
           <p>{this.props.hairColor}</p>
        </div>
    }
}

export default Prop;