import React, { Component } from 'react';
import * as api from '../api';

class PostComment extends Component {
    state = {
        body: ''
    }

    render() {
        return <React.Fragment>
            <div>
                <p onChange={e => this.handleInput(e)}><textarea className='postTextBox' placeholder='Your comment here' /></p>
                <button className='submitButton' onClick={this.submitComment}>Post comment</button>
            </div>
        </React.Fragment>
    }

    handleInput = e => {
        const { value } = e.target;
        this.setState({
            body: value
        })
    }

    submitComment = () => {
        const newComment = {
            body: this.state.body,
            belongs_to: this.props.article._id
        }
        api.postComment(this.props.article._id, newComment)
        .catch(err => {
            if (err.response.status) alert('Your comment cannot be empty');
        })
        .then(() => this.setState({
            body: ''
        }))
        .then(() => window.location.reload(true));   
    }

}

export default PostComment;