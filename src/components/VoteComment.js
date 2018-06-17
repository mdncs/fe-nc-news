import React, { Component } from 'react';
import * as api from '../api';
import * as utils from '../utils';
import { Link } from 'react-router-dom';

class VoteComment extends Component {
    state = {
        comment: this.props.comment,
        users: []
    }

    componentDidMount() {
        api.fetchUsers().then(users => this.setState({ users }))
    }

    render() {
        if (!this.state.users.length) return null;
        const user = this.state.users.filter(user => user._id === this.state.comment.created_by)[0];
        return <div className='votingAndPostingComment'>
                <p className='postedOn'>posted by <Link to={`/users/${user.username}`}>{`${user.username}`}</Link> {utils.getTimeDiff(this.state.comment.created_at)} </p>
            <div className='voting'>
                <label>Votes: {this.state.comment.votes}</label>
                <br/>
                <button className='voteButton' onClick={() => this.handleVoteClick(true)}><span className='voteImg' role="img" aria-label="thumbsUp">⬆️</span></button>
                <button className='voteButton' onClick={() => this.handleVoteClick(false)}><span className='voteImg' role="img" aria-label="thumbsUp">️️️️⬇️</span></button>
            </div>
        </div>
    }
    
    handleVoteClick = up => {
        const { comment } = this.state;
        const newComment = Object.assign({}, { ...comment, votes: up ? comment.votes + 1 : comment.votes - 1 });
        api.voteComment(comment._id, up ? 'up' : 'down')
        .then(comment => this.setState({ comment: { ...newComment } }))
        .then(api.fetchComments())
    }

}

export default VoteComment;