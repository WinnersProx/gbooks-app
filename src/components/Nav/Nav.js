import React, { Component } from 'react';
import { Search, Bookmarks } from '@material-ui/icons';
import { Link } from 'react-router-guard';

export default class Nav extends Component {
    
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
                                <form className="form-inline A_Nav_Search mari16">
                                    <div className="searchForm">
                                        <input className="form-control rounded-pill" type="search" placeholder="Search book..." aria-label="Search" />
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
                                <Link to="/view" className="text-white">
                                    <Bookmarks className="optionIcon"/> Favourites
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
