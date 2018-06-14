import React, { Component } from 'react';
import '../index.css';
import { topics } from '../data/topics';
import { articles } from '../data/articles';
import { comments } from '../data/comments';
import { users } from '../data/users';
import Topics from './Topics';
import FilterMostPopularArticles from './FilterMostPopularArticles';
import MostRecentComments from './MostRecentComments';

class App extends Component {
  state = {
    topics: topics,
    articles: articles,
    comments: comments,
    users: users
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Northcoders News</h1>
        </header>
        <nav id='navHeader'>
          Most popular topics | Sort by: popularity, views, comments  
        </nav>
        <div id='mainContainer'>
          <div id='topicsContainer'>
            <Topics topics={this.state.topics}/>
          </div>
          <div id='mostRecentComments'>
            <MostRecentComments comments={comments.sort((a, b) => b.created_at - a.created_at)} 
                                users={this.state.users} articles={this.state.articles} />
          </div>
          <div id='popularArticles'>
            <FilterMostPopularArticles articles={this.state.articles.sort((a, b) => b.votes - a.votes)}
                                       topics={this.state.topics} users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
