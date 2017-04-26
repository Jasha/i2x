import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from 'components/LoginForm.js';

describe('<LoginForm />', function () {

  let component;
  beforeEach(function () {
    const props = {
      submitAction: () => { }
    };

    component = shallow(<LoginForm submitAction={props.submitAction} />);
  });

  describe('when rendering the component', function () {
    it('should have a form with a prop of "horizontal"', function () {
      expect(component.find('Form').prop('horizontal')).to.equal(true);
    });
  });

  describe('when submit', function () {
    it('should perform email and password validation', function () {
      const submitButton = component.find('Button');

      component.setState({ email: 'testcom', password: '' });
      submitButton.props().onClick();
      expect(component.state().isValidEmail).to.equal(false);
      expect(component.state().isValidPassword).to.equal(false);

      component.setState({ email: 'test@email.com', password: 'somepw123' });
      submitButton.props().onClick();
      expect(component.state().isValidEmail).to.equal(true);
      expect(component.state().isValidPassword).to.equal(true);
    });
  });

  describe('when typing', function () {
    it('should update state', function () {
      const emailFormControl = component.find('[type="email"]');
      const passwordFormControl = component.find('[type="password"]');

      emailFormControl.simulate('change', { target: { value: 'new email' } });
      passwordFormControl.simulate('change', { target: { value: 'new password' } });

      expect(component.state().email).to.equal('new email');
      expect(component.state().password).to.equal('new password');
    });

    it('should submit when enter key is pressed', function () {
      const emailFormControl = component.find('[type="email"]');

      component.setState({ email: 'test@email.com', password: 'somepw123' });

      emailFormControl.simulate('keyPress', { key: 'Enter' });

      expect(component.state().isValidEmail).to.equal(true);
      expect(component.state().isValidPassword).to.equal(true);
    });
  });
});
