import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageHeader, ListGroup, Alert } from 'react-bootstrap';
import getAllRecordings from '../actions/recordingActions';
import Loader from '../components/Loader';
import RecordingItem from '../components/RecordingItem';

class Recordings extends React.Component {
  static renderRecordings(data) {
    return data.map((item, index) =>
      <RecordingItem
        key={index}
        text={item.final_script}
        rating={item.rating}
        duration={item.duration}
        audioUrl={item.url}
        dateCreated={item.created}
        />
    );
  }

  componentWillMount() {
    this.props.dispatch(getAllRecordings());
  }

  render() {
    const recordingItems = Recordings.renderRecordings(this.props.recordings);

    return (
      <div className="container">
        <PageHeader>Recordings</PageHeader>
        <Loader loaded={!this.props.isLoading}>
          <ListGroup componentClass="ul">
            { recordingItems.length === 0 && !this.props.isLoading ?
              <Alert bsStyle="warning">No recordings found.</Alert> :
              recordingItems
            }
          </ListGroup>
        </Loader>
      </div>
    );
  }
}

Recordings.propTypes = {
  dispatch: PropTypes.func,
  isLoading: PropTypes.bool,
  recordings: PropTypes.arrayOf(PropTypes.shape({}))
};

function mapStateToProps(state) {
  const props = {
    isLoading: state.RecordingReducer.isLoading,
    recordings: state.RecordingReducer.recordings
  };
  return props;
}

export default connect(mapStateToProps)(Recordings);
