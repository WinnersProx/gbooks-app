import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-guard';
import { Bookmark } from '@material-ui/icons';
import { connect } from 'react-redux';

class BookCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { book } = this.props;

		return (
			<Card className="w-100 custom-card">
				<Card.Img variant="top" src={ book.volumeInfo.imageLinks.thumbnail } style={{ height: '250px' }} />
				<Card.Body>
					<Card.Title>{ book.volumeInfo.title }</Card.Title>
					<Card.Text>
						{ book.volumeInfo?.description?.slice(0, 200) }
						{ book.volumeInfo?.description?.length > 200 ? '...' : ''}
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
				</ListGroup>
				<Card.Body className="text-right">
					<Link to="/add-to-favoured">
						<Bookmark className="optionsIcon" /> bookmark
					</Link>
				</Card.Body>
			</Card>
		)
	}
}


export default connect(null, { })(BookCard);
