import React, { Component } from 'react';
import { Search, Bookmarks } from '@material-ui/icons';
import { Link } from 'react-router-guard';
import SearchResults from '../Search/SearchResults';
import { connect } from 'react-redux';
import { searchGBooks } from '../../redux/actions/booksActions';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearching: false
        }
    }

    /**
     * search for a book based on the user's query
     * @param  {Event} e event
     * @return {}   results per user query
     */
    searchBooks(e) {
        e.preventDefault();

        if(e.target.value.trim().length) {
            this.setState({ isSearching: true });
            this.props.searchGBooks(e.target.value);
        }
        else {
            this.setState({ isSearching: false });
        }
    }

    /**
     * to skip searching
     * @param  {Event} e Event triggered by the user
     * @return {}   skip the ongoing search
     */
    skipSearch(e) {
        if(this.state.isSearching)
            this.setState({ isSearching: false });
    }

    submitSearchQuery(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand bg-pr custom-nav">
                    <div className="text-white font-weight-bold">
                        <Link to="/" className="text-white branding">GBooks</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarToggler1">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <form className="form-inline">
                                    <div className="searchForm">
                                        <input className="form-control rounded-pill" type="search" placeholder="Search book..." aria-label="Search" onChange={ this.searchBooks.bind(this) } />
                                        <button className="btn bg-white rounded-pill" type="submit">
                                            <Search className="optionIcon"/>
                                        </button>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarToggler2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="text-white" to="/">
                                    <Bookmarks className="optionIcon"/> 
                                    <span className="sm-invisible">Favourites</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="mt-4">
                    { this.state.isSearching && <SearchResults skipSearch={ this.skipSearch.bind(this) }/> }
                </div>
            </div>
        )
    }
}

export default connect(null, { searchGBooks })(Nav);
