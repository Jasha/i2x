import React from 'react';

class Loader extends React.Component {
	render() {
    const overlayClass = 'loader__overlay';
    const overlayClassModifier = overlayClass + (this.props.loaded ? '--hidden' : '--active');
		
		return (
			<div>
				{ this.props.children }
				
				<div className={overlayClass + ' ' + overlayClassModifier}></div>
			</div>
			);
	}
}

Loader.propTypes = {
	loaded: React.PropTypes.bool
};

Loader.defaultProps = {
	loaded: true
};

export default Loader;
