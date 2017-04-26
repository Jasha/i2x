import React from 'react';
import { shallow } from 'enzyme';
import RecordingItem from 'components/RecordingItem.js';

describe('<RecordingItem />', function () {

  let component;
  beforeEach(function () {
    let text = '';
    for (let i = 0; i < 1002; i++) { text += 'a'; }

    component = shallow(<RecordingItem text={text} />);
  });

  describe('when rendering the component', function () {
    it('should have a className of "list-group-item"', function () {
      expect(component.find('li').hasClass('list-group-item')).to.equal(true);
    });

    it('should have a button with className of "recording-item__expand-link"', function () {
      expect(component.find('button').hasClass('recording-item__expand-link')).to.equal(true);
    });
  });

  describe('when click on button', function () {
    it('should expand', function () {
      const buttonControl = component.find('button');
      const isCurrentlyExpanded = component.state().isTextExpanded;

      buttonControl.simulate('click');

      expect(component.state().isTextExpanded).to.equal(!isCurrentlyExpanded);

      component.update();
      
      if (component.state().isTextExpanded) {
        expect(component.find('button').text()).to.equal('Show less');
      } else {
        expect(component.find('button').text()).to.equal('Show less');
      }
    });
  });

  describe('when text is short', function () {
    it('should not have an expand button', function () {
      component.setProps({ text: 'a' });
      expect(component.hasClass('recording-item__expand-link')).to.equal(false);
    });
  });
});
