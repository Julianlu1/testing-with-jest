import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import {getAllTodos} from './Network/todoAPI';
import { title } from 'process';

interface State {
  items: Array<Item>;
  value : number;
  deleteItemParent: Function;

}

interface Item {
  title: string;
  completed: boolean;
}

class App extends Component {
    
  public deleteItemParent = (index : any) =>{
    let array = [...this.state.items]; // make a separate copy of the array
    array.splice(index, 1); // Remove item by index
    this.setState({items: array});
  }
  public state : State = {
    items: [],
    value : 5,
    deleteItemParent : this.deleteItemParent
  };


  public addToDo = (state: Item) =>{
    let array = [...this.state.items]; // make a separate copy of the array
      array.push(state)
      this.setState({
        items: array
      });
  }

  getAllTodos = async () => {
    await fetch(
      `https://jsonplaceholder.typicode.com/todos?&_limit=${this.state.value}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({ items: json })
      });
  };

 

  componentDidMount() {
    this.getAllTodos();
  }

 onSliderChange = (value : any) => {
  this.setState({
    value,
  });
};

componentDidUpdate(prevProps : any, prevState: any) {
  // Updates todo's if state changed
  if (prevState.value !== this.state.value) {
    this.getAllTodos();
    console.log(this.state.items)
  }
}

testAction = () =>{
  this.setState({
    value : 80
  });
}

  render(){
    return (
      <div className="App">
        <button onClick={this.testAction} id="testbtn">Test</button>
            <AddToDo addToDoParent={this.addToDo}/>
            <div>
                Todo's : {this.state.value}
            </div>
            <Slider
            className="slider"
            style={{width: "25%", margin: "0 auto"}}
          value={this.state.value}
          onChange={this.onSliderChange}
        />
            <ToDoList items={this.state.items} deleteFromParent={this.deleteItemParent}/>
      </div>
    );
  }
 
}

export default App;
