import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../404error.css';

class Error404 extends Component {
    render() {
        return <div>
            <div class='sorryMessage'>
                <p><span className='errCode'></span>I'm sorry, something went wrong...</p>
                <p>Pleaaase <Link to={`/`} className='goBackHomeLink'>go back</Link> or check the link is correct.</p>
            </div>
            <div id='err404img'>
                <img src='https://www.meme-arsenal.com/memes/0d6cab3045d7b962c064cc9247bccd39.jpg' alt='sorry' />
            </div>
        </div>
    }
}


export default Error404;