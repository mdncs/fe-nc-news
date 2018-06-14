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
        return Promise.all([
            api.fetchArticlesByTopicId(this.props.match.params.topicId),
            api.fetchTopics(),
            api.fetchUsers()
        ])
            .then(([articles, topics, users]) => {
                this.setState({ articles, topics, users })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.topicId !== prevProps.match.params.topicId) {
            api.fetchArticlesByTopicId(this.props.match.params.topicId).then(articles => {
                this.setState({ articles })
            });
        }
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