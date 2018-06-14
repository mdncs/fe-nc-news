import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

class ArticleByArticleId extends Component {
    state = {
        article: null,
        users: [],
        topics: []
    }

    componentDidMount() {
        const { articleId } = this.props.match.params;
        return Promise.all([
            api.fetchArticlebyArticleId(articleId),
            api.fetchUsers(),
            api.fetchTopics()
        ])
       .then(([article, users, topics]) => {
            this.setState({ article, users, topics });
        });
    };

    render() {
        const { article } = this.state;

        if (!article) return null;
        else {
            const username = this.state.users.filter(({ _id }) => _id === article.created_by)[0].username;
            const topic = this.state.topics.filter(({ _id }) => _id === article.belongs_to)[0];
            return (
            <div>
                <h1 id='articleTitle'>{article.title}</h1>
                <h5 className='authorName'>by <Link to={`/users/${username}`}>{username}</Link></h5>
                <p id='articleBody'>{article.body}</p>
                <h6 className='moreBy'><Link to={`/users/${username}`}>(more articles by {username})</Link></h6>
                <footer>Browse more articles in <Link to={`/topics/${topic._id}/articles`}>{topic.title}</Link> </footer>
            </div>
            ) 
        }      
    }
}

export default ArticleByArticleId;