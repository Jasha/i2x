import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from 'components/LoginForm.js';

describe('<LoginForm />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<LoginForm />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "loginform-component"', function () {
      expect(component.hasClass('loginform-component')).to.equal(true);
    });
  });
});
