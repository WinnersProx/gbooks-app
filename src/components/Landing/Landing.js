import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import { Link } from 'react-router-guard';
import { Bookmark } from '@material-ui/icons';
import { connect } from 'react-redux';
import { fetchBooks } from '../../redux/actions/booksActions';

import Card from '../Card/Card';
import CustomLoader from '../CustomLoader/CustomLoader';

class Landing extends Component {

	componentWillMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books } = this.props;
		console.log(books);
		return (
			<div className="container-fluid">
				<Nav />
				<CustomLoader />
				<div className="container">
					<div className="row mt-5">
						{
							this.props.books?.items.map((book, i) => (
								<div className="col-12 col-lg-4 col-md-6 mb-4" key={i}>
									<Card book={book}/>
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ booksReducer }) => {
	const { books } = booksReducer;
	console.log(books);
	return { books };
}

export default connect(mapStateToProps, { fetchBooks })(Landing);
