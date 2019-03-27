import React from 'react';

import { shallow } from 'enzyme';

import Demo from './demo';

describe('<Demo />', ()=>{
    xit('renders without crashing', ()=>{
        shallow(<Demo />);
    });

    fit('render content', ()=>{
        const wrapper = shallow(<Demo />);
        const welcome = <span>1234</span>;
        expect(wrapper.contains(welcome)).toBe(true);        
    })
})