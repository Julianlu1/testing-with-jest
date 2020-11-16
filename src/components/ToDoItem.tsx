import * as React from "react";
import Styled from "styled-components";

interface Item {
    title: string;
    completed: boolean;
  }

class ToDoItem extends React.Component<{ toDoItem: Item , deleteItem : any}> {

  render(): React.ReactNode {
    const item = this.props.toDoItem
    const deleteTodo = () =>{
      console.log("deleted id");
      this.props.deleteItem();
    }
    return (
      <Div>
        <h2>{item.title}</h2>
        <p>
         {item.completed}
        </p>
        <button id="testbutton" onClick={deleteTodo}>Delete</button>
      </Div>
    );
  }
}
const Div = Styled.div`
    & > h2,p{
        text-align: left;
        margin-left: 10px;
    }

    & > button{
        display: block;
        margin-left: 10px;
        border: none;
        padding: 10px 15px;
        background-color: #e74c3c;
        color: #fff;
        cursor: pointer;
        transition: 0.3s ease ;
    }
`

export default ToDoItem;
