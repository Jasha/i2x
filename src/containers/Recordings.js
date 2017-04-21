import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllRecordings } from '../actions/recordingActions';
import { PageHeader, ListGroup } from 'react-bootstrap';
import RecordingItem from '../components/RecordingItem';

class Recordings extends React.Component {
  componentWillMount() {
    this.props.dispatch(getAllRecordings());
  }

  renderRecordings(data) {
    return data.map(function(item, index) {
      return (
        <RecordingItem
          key={index}
          text={item.final_script}
          rating={item.rating}
          duration={item.duration}
          audioUrl={item.url}
          dateCreated={item.created}
          />
      );
    });
  }

  render() {
    const recordingItems = this.renderRecordings(this.props.recordings);

    return (
      <div className="container">
        <PageHeader>Recordings</PageHeader>
        <ListGroup componentClass="ul">
          { recordingItems }
        </ListGroup>
      </div>
    );
  }
}

Recordings.propTypes = {
};

function mapStateToProps(state) {
  const props = { recordings: state.RecordingReducer.recordings };
  return props;
}

export default connect(mapStateToProps)(Recordings);
