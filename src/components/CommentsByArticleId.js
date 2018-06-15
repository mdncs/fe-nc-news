import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';
import * as utils from '../utils';

class CommentsByArticleId extends Component {
    state = {
        comments: [],
        articles: [],
        users: []
    }

    componentDidMount() {
        const { articleId } = this.props.match.params;
        return Promise.all([
            api.fetchCommentsByArticleId(articleId),
            api.fetchArticles(),
            api.fetchUsers()
        ])
        .then(([comments, articles, users]) => this.setState({ comments, articles, users }))
    }

    render() {
        const { comments, articles, users } = this.state;
        if (!comments.length) return null;
        return (
            <div>
                {comments.map(({ body, created_at, votes, _id, belongs_to, created_by }) => {
                    const article = articles.filter(article => article._id === belongs_to)[0];
                    const user = users.filter(user => user._id === created_by)[0];
                    return <div key={_id}>
                    <h2>All comments for <Link to={`/articles/${article._id}`}> {article.title}</Link></h2>
                        <p>{body} ({votes} votes)</p>
                        <p>posted by <Link to={`/users/${user.username}`}>{`${user.username}`}</Link> {utils.getTimeDiff(created_at)} </p>
                    </div>
                })}
            </div>
        )
    }
}

export default CommentsByArticleId;