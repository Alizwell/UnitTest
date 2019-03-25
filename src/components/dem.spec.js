import React from 'react';

import { shallow } from 'enzyme';

import Demo from './demo';

describe('<Demo />', ()=>{
    it('renders without crashing', ()=>{
        shallow(<Demo />);
    });

    it('render content', ()=>{
        const wrapper = shallow(<Demo />);
        const welcome = <span>1234</span>;
        // expect(wrapper.contains(welcome)).toBe(true);
        // expect(wrapper.contains(welcome)).toEqual(false);
    })
})