import * as React from 'react';
import { shallow } from 'enzyme';
import Teachers from './Teachers';

describe('<Teachers />', () => {
  test('renders', () => {
    const wrapper = shallow(<Teachers />);
    expect(wrapper).toMatchSnapshot();
  });
});
  