import '../styles/tabs.css';

import { Link, withRouter } from 'react-router-dom'
import React, { Component } from 'react';

class Tabs extends Component {    
    render() {
        const currentLocation = this.props.location.pathname;
        return <ul className="tabs">
            <li className="tab">
                <Link to="/" className={`tabLink ${currentLocation === '/' ? 'tabLink_active' : null}`}>All</Link>
            </li>
            <li className="tab">
                <Link to="/current" className={`tabLink ${currentLocation === '/current' ? 'tabLink_active' : null}`}>Current</Link>
            </li>
            <li className="tab">
                <Link to="/granted" className={`tabLink ${currentLocation === '/granted' ? 'tabLink_active' : null}`}>Granted</Link>
            </li>
            <li className="tab">
                <Link to="/about" className={`tabLink ${currentLocation === '/about' ? 'tabLink_active' : null}`}>About me</Link>
            </li>
        </ul>
    }
}
export default withRouter(Tabs);