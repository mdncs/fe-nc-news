import React, { Component } from 'react';
import * as api from '../api';
import { filterItem } from '../utils';
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
        const { articles, topics } = this.state;

        
        return (
            <div className='homePageItems'>
                <label>Sort by</label>
                <br/>
                <select onChange={e => this.handleSelection(e)}>
                    <option selected default disabled>choose a sort order</option>
                    <option value='votes'>most popular</option>
                    <option value='comments'>most comments</option>
                </select>
                {articles.sort((a, b) => b.votes - a.votes).map(({ comments, title, _id, votes, created_by, belongs_to }) => {
                    const topic = filterItem(topics, belongs_to);
                    return <React.Fragment key={_id}>
                    <div>    
                            <p><Link to={`/articles/${_id}`} key={_id} id='allArticlesList'>{title}</Link> (comments: {comments})</p>        
                            <p>by <Link to={`../users/${created_by.username}`} className='postedBy'>{created_by.username} </Link>
                                in <Link to={`../topics/${topic._id}/articles`} className='postedBy'>{topic.title}</Link> ({votes} votes)</p>
                        </div>
                    </React.Fragment>
                    
                })}
            </div>
        )
    }

    handleSelection = e => {
        const { value } = e.target;
        const newArr = [...this.state.articles];
        newArr.sort((a, b) => b[value] - a[value]);
        this.setState({  articles: newArr});
    }
}

export default Articles;