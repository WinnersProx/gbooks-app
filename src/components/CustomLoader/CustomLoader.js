import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomLoader extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const { error, isFetching } = this.props;

		const errors = error && <div>
			An error occured, check your internet connection
		</div>;

		const loading = isFetching && <div>
			Loading...
		</div>;

		return (
			<>
				{
					( isFetching || error )
					&& <div className="container d-flex justify-content-center align-items-center" 
						style={{ height: 'calc(100vh - 50px)'}}>
						{ errors }
						{ loading }
					</div>
				}
			</>
		);
	}
}

const mapStateToProps = ({ processReducer }) => {
	const { isFetching, error } = processReducer;

	return { isFetching, error };
}

export default connect(mapStateToProps, { })(CustomLoader);
