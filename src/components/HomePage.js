import React, { Component } from 'react';
import Articles from './Articles';
import MostRecentComments from './MostRecentComments';
import * as api from '../api';
import Topics from './Topics';

class HomePage extends Component {

    state = {
        articles: [],
        topics: [],
        users: [],
        comments: []
    };

    componentDidMount() {
        return Promise.all([
            api.fetchArticles(),
            api.fetchTopics(),
            api.fetchUsers(),
            api.fetchComments()
        ])
        .then(([articles, topics, users, comments]) => this.setState({ articles, topics, users, comments }))
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        });
    }

    render() {
        return <div id='mainContainer'>
            <div id='topicsContainer'>
                <Topics />
            </div>
            <div id='mostRecentComments'>
                <MostRecentComments comments={this.state.comments.sort((a, b) => b.created_at - a.created_at)}
                    users={this.state.users} articles={this.state.articles} />
            </div>
            <div id='popularArticles'>
                <div>
                    <h3 className='subheading'>Most popular articles:</h3>
                    <Articles />
                </div>
            </div>
        </div>
    }
}

export default HomePage;