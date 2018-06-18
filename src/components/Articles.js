import React, { Component } from 'react';
import * as api from '../api';
import { Link } from 'react-router-dom';

class Articles extends Component {
    state = {
        articles: [],
        topics: [],
        comments: []
    };

    componentDidMount() {
        return Promise.all([
            api.fetchArticles(),
            api.fetchTopics(),
            api.fetchComments()
        ]).then(([articles, topics]) => {
            this.setState({
                articles,
                topics
            });
        })
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        })
    }

    render() {
        const { articles, topics, comments } = this.state;
        return (
            <div className='homePageItems'>
                {articles.sort((a, b) => b.votes - a.votes).map(({ title, _id, votes, created_by, belongs_to }) => {
                    const topic = topics.filter(({ _id }) => _id === belongs_to)[0];
                    return <React.Fragment key={_id}>
                    <div>    
                            <p><Link to={`/articles/${_id}`} key={_id} id='allArticlesList'>{title}</Link> (comments: {comments.length})</p>        
                            <p>by <Link to={`../users/${created_by.username}`} className='postedBy'>{created_by.username} </Link>
                                in <Link to={`../topics/${topic._id}/articles`} className='postedBy'>{topic.title}</Link> ({votes} votes)</p>
                        </div>
                    </React.Fragment>
                    
                })}
            </div>
        )
    }
}

export default Articles;