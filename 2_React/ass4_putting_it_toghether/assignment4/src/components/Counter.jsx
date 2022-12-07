import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.age };
  }
  increaseAge = () => this.setState({ counter: this.state.counter + 1 });
  render() {
    return (
      <div>
        <h1>
          {this.props.fname},{this.props.lname}
        </h1>
        <p>{this.state.counter}</p>
        <p>{this.props.hairColor}</p>
        <button onClick={this.increaseAge}>
          Birthday Button for {this.props.fname} {this.props.lname}
        </button>
      </div>
    );
  }
}

export default Counter;
