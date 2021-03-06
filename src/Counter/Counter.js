import React, { Component } from 'react'

class Counter extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  deleteCounter = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  render() {
    return (
      <>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.deleteCounter}>-</button>
      </>
    )
  }
}

export default Counter
