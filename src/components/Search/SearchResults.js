import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { history } from 'react-router-guard';
import { Close } from '@material-ui/icons';
import { connect } from 'react-redux';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.skipSearch = this.props.skipSearch.bind(this)
	}

	viewBookDetails(bookId, e) {
		e.preventDefault();
		this.skipSearch();
		
		history.push('/book/'+bookId);
	}

	render() {
		const { results, isSearching } = this.props;

		const fetching = isSearching
		&& <div className="w-100 text-center">
			Loading...
		</div>;

		return (
			<div className="search-results">
				<div>
					<ListGroup>
						<ListGroupItem className="text-right">
							<Close className="optionsIcon" onClick={this.skipSearch} />
							{ fetching }
						</ListGroupItem>
						{
							!isSearching && this.props.results?.items?.map((result, index) => (
								<ListGroupItem className="d-flex align-items-center" key={index} onClick={this.viewBookDetails.bind(this, result.id)}>
									<div className="">
										<img src={result?.volumeInfo?.imageLinks?.smallThumbnail} height="100px" width="80px" alt="Book image"/>
									</div>
									<div className="pl-2 pl-md-4 pl-lg-4">
										<div className="font-weight-bold">{ result?.volumeInfo?.title }</div>
										<div>Written by { result?.volumeInfo?.authors?.join(',').replace(',', ' and ') }</div>
										<div>Published by { result?.volumeInfo?.publisher }</div>
									</div>
								</ListGroupItem>
							))
						}
					</ListGroup>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ booksReducer, processReducer }) => {
	const { results } = booksReducer;
	const { isSearching } = processReducer

	return { results, isSearching };
}

export default connect(mapStateToProps, { })(SearchResults);
