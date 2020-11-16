import * as React from "react";
import ToDoItem from "./ToDoItem";
import Styled from "styled-components";
// import "./ToDoList.css";



interface Item {
  title: string;
  completed: boolean;
}

class ToDoList extends React.Component<{ items: Array<Item>,deleteFromParent:Function}> {
  
  public deleteItemParent = (index : any) =>{
    this.props.deleteFromParent(index);
  }
  render(): React.ReactNode {
    const REACT_VERSION = React.version;

    return (
      <div>
          <div>React version: {REACT_VERSION}</div>
     
        <SectionTodos>
          <Header>
            <h1>TODO LIST</h1>
          </Header>
          <div>
            {this.props.items.map((item, index) => (
              <TodoDiv key={index}>
                <ToDoItem key={index} toDoItem={item} deleteItem={() => this.deleteItemParent(index)} />
              </TodoDiv>
            ))}
          </div>

        </SectionTodos>
      </div>
    );
  }
}

const SectionTodos = Styled.div`
    width: 50%;
    border: 2px solid #3498db;
    margin: 0 auto;
`;
const Header = Styled.div`
    background-color: #3498db;
    & > h1{
        margin: 0;
        padding: 10px 0;
        color: #fff;
    }
`;

const TodoDiv = Styled.div`
    width: 50%;
    margin: 15px auto;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;
export default ToDoList;
