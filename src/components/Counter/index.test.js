import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Counter from './index';

describe('Counter', () =>{
  it('should render a  button', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should increment the initial Value of counter', () =>{
    const wrapper = shallow(<Counter initialValue={11} />);
    wrapper.instance().increamentCounter();
    expect(wrapper.instance().state.counter).toEqual(12);
  });
  it('should decreament the initial Value of counter', () =>{
    const wrapper = shallow(<Counter initialValue={0} />);
    wrapper.instance().decreamentCounter();
    expect(wrapper.instance().state.counter).toEqual(-1);
  });
  it('should check that initial Value of counter to be same as passed', () =>{
    const wrapper = shallow(<Counter initialValue={5} />);
    expect(wrapper.instance().state.counter).toEqual(5);
  });
});