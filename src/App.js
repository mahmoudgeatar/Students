import React, {Component} from 'react';
import TodoItem from "./component/todoitem/TodoItem"
import AddItem from "./component/AddItem/AddItem"
import "./App.css"

class App extends Component  {


  state={
    items:[
      {name:"Mahmoud", age: 30 , id:1},
      {name:"Ali", age: 28 , id:2},
      {name:"Mohamed", age: 24 , id:3},
    ]
  }

  deletitem = (id) =>{
    let {items} =this.state;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }

  addItem = (item) =>{
     item.id = Math.random();
     let items = this.state.items;
     items.push(item);
     this.setState({items})
  }

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">Students</h1>
        <TodoItem items={this.state.items} deletitem={this.deletitem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
  
}

export default App;
