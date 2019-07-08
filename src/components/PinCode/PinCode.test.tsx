import * as React from 'react';
import { shallow } from 'enzyme';
import PinCode from './PinCode';

describe('<PinCode />', () => {
  test('renders', () => {
    const wrapper = shallow(<PinCode />);
    expect(wrapper).toMatchSnapshot();
  });
});
  