import React from 'react';
import { shallow , mount, ShallowWrapper} from 'enzyme';
import flushPromises from "flush-promises";


import App from "../App";
import ToDoList from "../../src/components/ToDoList";
import ToDoItem from "../../src/components/ToDoItem";
import AddToDo from "../../src/components/AddToDo";

let wrapper : ShallowWrapper
beforeAll(() =>{
    wrapper = shallow(<App/>)
})

it("renders heading", () =>{
    const wrapperApp = shallow(<App />);
    const items : Array<any> = wrapperApp.state('items');
    const wrapper = shallow(<ToDoList items={items} deleteFromParent={wrapperApp.state('deleteItemParent')} />);

    expect(wrapper.contains( <h1>TODO LIST</h1>));
})

it("renders 5 todo's",async  () => {
    const wrapperApp : any = shallow(<App />);

    await new Promise(res => setTimeout(res));

    const items : Array<any> = wrapperApp.state('items');
    const wrapper = shallow(<ToDoList items={items} deleteFromParent={wrapperApp.state('deleteItemParent')} />);

    const todos = wrapper.find(ToDoItem)

    expect(todos.length).toBe(5);
});

it("has 5 items in the state", async () => {
    const wrapperApp : any = shallow(<App />);
    // await wrapperApp.instance().componentDidMount();
    
    await new Promise(res => setTimeout(res));


    const items : Array<any> = wrapperApp.state('items');

    expect(items).toHaveLength(5);
});

it("Updates todo list onChange slider 50", async () =>{

    
    // const slider = wrapperApp.find('.slider');
    // slider.simulate('change',{value: 50})

    Promise.resolve().then(() => {
        const wrapperApp : any = shallow(<App />);
        wrapperApp.instance().componentDidMount();
        const btn = wrapper.find('#testbtn');
        btn.simulate('click');
      })
      
      await flushPromises();

      const newItems : Array<any> = wrapper.state('items');
      expect(newItems.length).toBe(50);
     
})

it("deletes the first todo by checking the state", () =>{
    const wrapperApp = shallow(<App />);
    const items : Array<any> = wrapperApp.state('items');
    const wrapper = shallow(<ToDoList items={items} deleteFromParent={wrapperApp.state('deleteItemParent')} />);

    let firstToDoItem = wrapper.find(ToDoItem)
    
    // const btn = firstToDoItem.find('#testbutton');
    // btn.simulate('click')

})

it("Adds one To Do Item by checking the state", async () => {
    const wrapperApp : any = shallow(<App />);
    await wrapperApp.instance().componentDidMount();
    const items : Array<any> = wrapperApp.state('items');
    let addTodo = wrapperApp.find(AddToDo);

    const item = {
        name: "testItem",
        description: "testDescription"
    }
    addTodo.props().addToDoParent(item)
    // simulate button clicks
    const newitemsState : Array<any> = wrapperApp.state('items');

    expect(newitemsState.length).toBe(6)
});