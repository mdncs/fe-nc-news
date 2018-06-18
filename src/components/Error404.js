import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../404error.css';

class Error404 extends Component  {
    render() {
        return <div>
            <p>Ooops, looks like this page doesn't exist :(</p>
            <Link to={`/`} className='goBackHome'><button>Go back home</button></Link>
        </div>
    }
}


export default Error404;