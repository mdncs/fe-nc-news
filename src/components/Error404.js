import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../404error.css';

class Error404 extends Component  {
    render() {
        return <div>
            <div class='sorryMessage'>
                <p><span className='errCode'>404</span> - I'm sorry, looks like this page doesn't exist...</p>
                <p>Pleaaase <Link to={`/`} className='goBackHomeLink'>go back</Link> or check the link is correct.</p>           
            </div>
            <div id='err404img'>
                <img src='https://i.ytimg.com/vi/9XfkZlcG8KU/maxresdefault.jpg' alt='sorry'/>
            </div>
        </div>
    }
}


export default Error404;