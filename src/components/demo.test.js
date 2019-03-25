import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Demo from './demo';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Demo />, div);
    ReactDom.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Demo />, div);
    ReactDom.unmountComponentAtNode(div);
});

it('renders welcome message', () => {
    const wrapper = shallow(<Demo />);
    const welcome = <h2>Welcome to React</h2>;
    console.log(wrapper);
    expect(wrapper.contains(welcome)).toBe(true);    
  });

  it('renders welcome message', () => {
    const wrapper = shallow(<Demo />);
    const welcome = <span>1234</span>;
    console.log(wrapper);
    expect(wrapper.contains(welcome)).toBe(true);    
  });