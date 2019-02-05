import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'react-test-renderer';
import Counter from './index';

describe('Button', () =>{
  it('should render a  button', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});