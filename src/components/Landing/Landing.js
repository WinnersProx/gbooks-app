import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import CustomLoader from '../CustomLoader/CustomLoader';

class Landing extends Component {

	render() {
		return (
			<div className="container-fluid">
				<Nav />
				<CustomLoader />
				<div className="w-100 d-flex justify-content-center align-items-center" style={{ height: '80vh', flexDirection: 'column' }}>
					<div className="text-pr font-weight-bold mb-2">
						<h4>Welcome to GBooks!</h4>
					</div>
					<div className="text-center">
						You can find any book in the world here, just type the title or author of a book
					</div>
				</div>
			</div>
		)
	}
}

export default Landing;
