import React, { Component } from 'react';
import * as api from '../api';
import PostComment from './PostComment';
import VoteComment from './VoteComment';
import DeleteComment from './DeleteComment';

class CommentsByArticleId extends Component {
    state = {
        comments: null,
        articles: []
    }

    componentDidMount () {
        return Promise.all([
            api.fetchCommentsByArticleId(this.props.match.params.articleId),
            api.fetchArticles()
        ])
        .then(([comments, articles]) => this.setState({ comments, articles }));
    }

    render() {
        const { comments, articles } = this.state;
        const article = articles.filter(article => article._id === this.props.match.params.articleId);
        if (!comments) return null;
        return <div>
            <PostComment article={article[0]}/>
            <div>
                {comments.sort((a, b) => b.votes - a.votes).map(comment => {
                    return <div key={comment._id}>
                        <p className='commentData'>{comment.body}</p>
                        <div>
                            <DeleteComment comment={comment} />
                            </div>
                            <div>
                            <VoteComment comment={comment}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default CommentsByArticleId;


