import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';

test('Link renders correctly', ()=>{
    const tree = renderer
    .create(<Link page="http://www.baidu.com">Baidu</Link>)
    .toJSON();

    expect(tree).toMatchSnapshot();
});