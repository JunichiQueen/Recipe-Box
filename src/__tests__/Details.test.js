import React from 'react';
import { shallow } from "enzyme";
import renderer from 'react-test-renderer'

import Details from '../Recipes/Details.js';

it('renders without crashing', () => {
    shallow(<Details />);
})

it('snapshot Details', () => {
    const wrapper = renderer.create(<Details />).toJSON();
    expect(wrapper).toMatchSnapshot();
})