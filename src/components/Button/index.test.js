import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Button from './index';

describe('Button', () =>{
  it('should render a  button', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should trigger onClick on button press', () =>{
    const wrapper = shallow(<Button buttonText='yo' onClick={jest.fn()}/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().props.onClick).toHaveBeenCalled();
  });
});