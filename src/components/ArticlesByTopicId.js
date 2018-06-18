import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';
import { filterItem } from '../utils';

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
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        });
    }

    render() {
        const { articles, topics, users } = this.state;
        if (!articles.length) return null;
        const topic = filterItem(topics, this.props.match.params.topicId);
        return (
            <React.Fragment>
                <h1 id='articleTitle'>Articles about {topic.slug}</h1>
                {articles.map(article => {
                    return (
                        <React.Fragment key={article._id}>
                            <Link to={`/articles/${article._id}`} key={article._id} className='link'>{article.title}</Link>
                            <p>by <Link to={`../../users/${users.filter(({ _id }) => _id === article.created_by)[0].username}`} className='link'>
                                {users.filter(({ _id }) => _id === article.created_by)[0].username}
                            </Link></p>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        )
    }

    


}

export default ArticlesByTopicId;