import React from 'react';
import { shallow } from 'enzyme';
import Loader from 'components/Loader.js';

describe('<Loader />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Loader loaded={true} />);
  });

  describe('when rendering the component', function () {
    it('should have a child "div" element with className of "loader__overlay"', function () {
      expect(component.children('div').hasClass('loader__overlay')).to.equal(true);
    });
  });

  describe('when it is loading', function () {
    it('should have a child "div" element with className of "loader__overlay--active"', function () {
      component.setProps({ loaded: false });
      expect(component.children('div').hasClass('loader__overlay--active')).to.equal(true);
    });
  });
});
