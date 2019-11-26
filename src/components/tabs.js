import '../styles/tabs.css';

import { Link } from 'react-router-dom'
import React from 'react';

const Tabs = () => {
    return (
        <ul className="tabs">
            <li className="tab">
                <Link to="/" className="tabLink">All</Link>
            </li>
            <li className="tab">
                <Link to="/current" className="tabLink">Current</Link>
            </li>
            <li className="tab">
                <Link to="/granted" className="tabLink">Granted</Link>
            </li>
            <li className="tab">
                <Link to="/about" className="tabLink">About me</Link>
            </li>
        </ul>
    )
}

export default Tabs;