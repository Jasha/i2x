import React from 'react';
import { shallow } from 'enzyme';
import RecordingItem from 'components/RecordingItem.js';

describe('<RecordingItem />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<RecordingItem />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "recordingitem-component"', function () {
      expect(component.hasClass('recordingitem-component')).to.equal(true);
    });
  });
});
