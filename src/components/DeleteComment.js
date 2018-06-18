import React, { Component } from 'react';
import * as api from '../api';

class DeleteComment extends Component {
    state = {
        comment: this.props.comment
    }

    render() {
        return <div className='deleteButtonDiv'>
            <button onClick={e => this.handleDeleteClick(e)} className='deleteButton'>delete</button>
        </div>
    }

    handleDeleteClick = e => {
        const { comment } = this.state;
        api.deleteComment(comment._id)
        .then(comment => this.setState({ comment: {} }))
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        })
        .then(() => {
            alert('Your comment was deleted!');
            window.location.reload(true);
        });
    }
}

export default DeleteComment;