import * as React from 'react';
import Styled from "styled-components";

interface Item {
    title: string;
    completed: boolean;
  }

class AddToDo extends React.Component<{addToDoParent : Function}>{
    public state : Item = {
        title : "",
        completed : false
    };
    public handleOnChangeTitle = (e : any) =>{
        this.setState({
            title: e.target.value
        })
    }

    public handleOnClick = () =>{
        this.props.addToDoParent(this.state)
    }
    render(){
        return(
            <div>
                <Input type="text" name="title" placeholder="title" onChange={this.handleOnChangeTitle}/>
                <Button type="submit" onClick={this.handleOnClick}>Save</Button>
            </div>
        )
    }
}

const Input = Styled.input`
    width: 20%;
    margin: 15px auto;
    padding: 5px 10px;
`

const Button = Styled.button`
  border: none;
  background-color: #3498db;
  color: #fff;
  padding: 5px 10px;
  cursor:pointer;
  &:hover{
    background-color: #297db5;
  }
`


export default AddToDo;