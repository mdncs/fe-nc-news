import React, { Component } from 'react';
import Topics from './Topics';
import FilterMostPopularArticles from './FilterMostPopularArticles';
import MostRecentComments from './MostRecentComments';
import * as api from '../api';

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
        .then(([articles, topics, users, comments]) => this.setState({ articles, topics, users, comments }));
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
                <FilterMostPopularArticles articles={this.state.articles.sort((a, b) => b.votes - a.votes)}
                    topics={this.state.topics} users={this.state.users}/>
            </div>
        </div>
    }
}

export default HomePage;