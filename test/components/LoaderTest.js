import React from 'react';
import { shallow } from 'enzyme';
import Loader from 'components/Loader.js';

describe('<Loader />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Loader />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "loader-component"', function () {
      expect(component.hasClass('loader-component')).to.equal(true);
    });
  });
});
