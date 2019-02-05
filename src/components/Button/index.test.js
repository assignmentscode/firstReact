import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'react-test-renderer';
import Button from './index';

describe('Button', () =>{
  it('should render a  button', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});