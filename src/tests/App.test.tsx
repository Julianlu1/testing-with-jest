import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import {getAllTodos} from '../Network/todoAPI';


test('renders the component', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

it('should retrieve data from the api endpoint', async () =>{
  const todos : Array<any> = await getAllTodos();
  expect(todos).toHaveLength(5);
})

it("has 5 items in the state", async () => {
  const wrapperApp : any = shallow(<App />);
  
  await new Promise(res => setTimeout(res,20));
  const items : Array<any> = wrapperApp.state('items');

  expect(items).toHaveLength(5);
});


