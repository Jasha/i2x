import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  render() {
    const overlayClass = 'loader__overlay';
    const overlayClassModifier = overlayClass + (this.props.loaded ? '--hidden' : '--active');

    return (
      <div>
        { this.props.children }

        <div className={`${overlayClass} ${overlayClassModifier}`} />
      </div>
    );
  }
}

Loader.propTypes = {
  loaded: PropTypes.bool,
  children: PropTypes.node
};

Loader.defaultProps = {
  loaded: true
};

export default Loader;
