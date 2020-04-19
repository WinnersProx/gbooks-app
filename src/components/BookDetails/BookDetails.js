import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CustomLoader from '../CustomLoader/CustomLoader';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Bookmark } from '@material-ui/icons';
import { connect } from 'react-redux';
import { fetchBookDetails } from '../../redux/actions/booksActions';

class BookDetails extends Component {
	constructor(props) {
		super(props);
		const { bookId } = this.props.match.params;
		
		this.state = {
			bookId: bookId
		};
	}
	componentWillMount() {
		const { bookId } = this.props.match.params;
		this.setState({ bookId });
		this.props.fetchBookDetails(bookId);
	}

	componentDidUpdate() {
		const { bookId } = this.props.match.params;
		
		if(this.state.bookId !== bookId){
			console.log(bookId);
			this.setState({ bookId });
			this.props.fetchBookDetails(bookId);
		}
	}
	render() {
		const { bookDetails: book, isFetching, error } = this.props;
		return (
			<div className="container-fluid">
				<Nav />
				<CustomLoader />
				{
					(!isFetching && !error) 
					&& book && <div className="container">
					<div className="row">
						<div className="col-md-5">
							<Card className="w-100 custom-card">
								<Card.Header>
									<Card.Title>{ book.volumeInfo.title }</Card.Title>
								</Card.Header>
								<Card.Body>
									<Card.Img variant="top" src={ book.volumeInfo.imageLinks.thumbnail } style={{ height: '60vh' }} />
								</Card.Body>
							</Card>
						</div>
						<div className="col-md-7">
							<Card className="w-100 custom-card">
								<Card.Body>
									<Card.Text>
										{ book.volumeInfo?.description }
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroupItem className="book-identity d-flex">
										<div className="author font-weight-bold">Author</div>
										<div>{ book.volumeInfo.authors.join(',').replace(',', ' and ') }</div>
									</ListGroupItem>
									<ListGroupItem className="book-identity d-flex">
										<div className="author font-weight-bold">Published by</div>
										<div>{ book.volumeInfo.publisher }</div>
									</ListGroupItem>
									<ListGroupItem className="book-identity d-flex">
										<div className="author font-weight-bold">Year</div>
										<div>{ new Date(book.volumeInfo.publishedDate).getFullYear() }</div>
									</ListGroupItem>
									<ListGroupItem className="book-identity d-flex">
										<div className="author font-weight-bold">Language</div>
										<div>{ book.volumeInfo.language }</div>
									</ListGroupItem>
									<ListGroupItem className="book-identity d-flex">
										<div className="author font-weight-bold">Pages</div>
										<div>{ book.volumeInfo.pageCount }</div>
									</ListGroupItem>
									<ListGroupItem className="book-identity d-flex">
										<div className="author font-weight-bold">Printed</div>
										<div>{ book.volumeInfo.printedPageCount  } books</div>
									</ListGroupItem>
								</ListGroup>
							</Card>
						</div>
					</div>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = ({ booksReducer, processReducer }) => {
	const { bookDetails } = booksReducer;
	const { isFetching, error } = processReducer;

	return { bookDetails, isFetching, error };
}

export default connect(mapStateToProps, { fetchBookDetails })(BookDetails);
