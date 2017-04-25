import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

const starEmptyImage = require('images/star-empty.png');
const starFullImage = require('images/star-full.png');

class RecordingItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTextExpanded: false
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({ isTextExpanded: !this.state.isTextExpanded });
  }

  render() {
    const MAX_CHARS_NO_EXPANDED = 1000;
    const isLongText = this.props.text.length > MAX_CHARS_NO_EXPANDED;
    const expandLinkMessage = this.state.isTextExpanded ? 'Show less' : 'Show more';

    return (
      <li className="list-group-item">
        <div className="recording-item__text" style={{ maxHeight: this.state.isTextExpanded ? '1000px' : '', marginBottom: isLongText ? '' : '30px' }}>
          { this.props.text }
        </div>
        { isLongText ?
          <div className="recording-item__expand-link" onClick={this.toggleExpanded}>
            { expandLinkMessage }
          </div> : null
        }
        <div className="recording-item__description">
          <div className="recording-item__rating">
            <Rating
              initialRate={this.props.rating}
              readonly={true}
              empty={<img src={starEmptyImage} className="recording-item__rating-icon" />}
              full={<img src={starFullImage} className="recording-item__rating-icon" />}
              />
          </div>
          <div className="recording-item__duration">
            { Math.round(this.props.duration / 60) + ' minutes' }
          </div>
          <div className="recording-item__audio">
            <audio controls>
              <source src={this.props.audioUrl} type="audio/ogg" />
              <source src={this.props.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="recording-item__date">
            { new Date(this.props.dateCreated).toDateString() }
          </div>
        </div>
      </li>
    );
  }
}

RecordingItem.displayName = 'RecordingItem';

RecordingItem.propTypes = {
  text: PropTypes.string,
  rating: PropTypes.number,
  duration: PropTypes.number,
  audioUrl: PropTypes.string,
  dateCreated: PropTypes.string,
};

RecordingItem.defaultProps = {
  text: '',
  rating: 0,
  duration: 0,
  audioUrl: '',
  dateCreated: ''
};

export default RecordingItem;
