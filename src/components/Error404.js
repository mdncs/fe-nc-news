import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../404error.css';

class Error404 extends Component  {
    render() {
        return <p>
            <Link to={`/`} className='goBackHome'><button>Go back home</button></Link>
        </p>
    }
}


export default Error404;