import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import { FaAlignLeft } from 'react-icons/fa'

export default class Navbar extends Component {
    state = {
        isOpen:false
    };

    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen});
    };

    render() {
        return (
            <>
            <nav className="navbar">

                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="cosaa" />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignLeft className="nav-icon"></FaAlignLeft>
                        </button>
                        
                    </div>
                    <ul className={this.state.isOpen ? 'show-nav nav-links': 'nav-links'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        )
    }
}
