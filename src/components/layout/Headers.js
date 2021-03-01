import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <Link className="navbar-brand text-4xl" to="/">Eventurley</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/locations">Locations</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Headers
