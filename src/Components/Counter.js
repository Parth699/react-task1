import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  increment() {
    // this.state.number++;
    // this.setState({number:this.state.number+1});

    this.setState((preState) => ({ number: preState.number + 1 }));
  }

  onClickHandler() {
    this.increment();
  }

  render() {
    return 
      <>
        <center>
          <h1>{this.state.number}</h1>
          <button onClick={this.onClickHandler.bind(this)}>Count</button>
        </center>
      </>
    );
  }
}

export default Counter;
