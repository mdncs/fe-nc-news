import React, { Component } from 'react';
import * as api from '../api';
import { Link } from 'react-router-dom';

class Articles extends Component {
    state = {
        articles: []
    };

    componentDidMount() {
        api.fetchArticles().then(articles => {
            this.setState({
                articles
            });
        });
    }

    render() {
        const { articles } = this.state;
        return (
            <div>
                {articles.map((article) => {
                    return (
                        <Link to={`/articles/${article._id}`} key={article._id}>
                            <p>{article.title}</p>
                        </Link>
                    )
                })}
            </div>
        )
    }
}

export default Articles;