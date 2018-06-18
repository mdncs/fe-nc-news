import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../404error.css';

class Error404 extends Component {
    render() {
        return <React.Fragment>
            <p>Something went wrong...</p>
            <Link to={`/`} className='goBackHome'><button>Go back home</button></Link>
        </React.Fragment>
    }
}


export default Error404;