import './App.css'

import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state= {
      count: 0
    }
  }
  increase = () => {
    this.setState({
      count:this.state.count+1
    })
  }
  decrease = () => {
    if (this.state.count>0){
    this.setState({
      count:this.state.count-1
    })
  }
  }
  reset =() => {
    this.setState({
      count:0
    })
  }

  render() {
    return(
      <div>
        <h1>Counter App</h1>
        <div>
          <h2>{this.state.count}</h2>
          <div>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      </div>
      

    )
  }
}

export default App


