import React, { Component } from "react"

class App extends Component {

  constructor(props) {
    super(props)
  }

  handleItem(event) {

  }

  addItem() {

  }

  render() {
    return (
      <div className="todo-container">
        <div className="input-container">
          <input className="todo-input" placeholder="New Item"/>
          <button className="todo-submit">Submit</button>
        </div>
        <ul className="todo-item-list">
          <li>First item</li>
          
        </ul>
      </div>
    )
  }
}

export default App;
