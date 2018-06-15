import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

class ArticlesByTopicId extends Component {
    state = {
        articles: [],
        topics: [],
        users: []
    }

    componentDidMount() {
        const { topicId } = this.props.match.params;
        return Promise.all([
            api.fetchArticlesByTopicId(topicId),
            api.fetchTopics(),
            api.fetchUsers()
        ])
        .then(([articles, topics, users]) => {
            this.setState({ articles, topics, users })
        })
    }

    render() {
        const { articles, topics, users } = this.state;
        if (!articles.length) return null;
        const topic = topics.filter(({ _id }) => _id === this.props.match.params.topicId)[0];
        return (
            <div>
                <h1>Articles about {topic.slug}</h1>
                {articles.map(article => {
                    return (
                        <div key={article._id}>
                            <Link to={`/articles/${article._id}`}>{article.title}</Link>
                            <p>by <Link to={`../../users/${users.filter(({ _id }) => _id === article.created_by)[0].username}`}>
                                {users.filter(({ _id }) => _id === article.created_by)[0].username}
                            </Link></p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ArticlesByTopicId;