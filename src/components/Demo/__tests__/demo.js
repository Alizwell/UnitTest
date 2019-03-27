import React from 'react';

import { shallow }  from 'enzyme';

import Demo from '../demo';



describe('<Demo />', ()=>{
    it("render content", ()=>{
        shallow(<Demo />);
    });
});