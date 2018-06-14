import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../index.css';
import HomePage from './HomePage';
import Articles from './Articles';
import ArticlesByTopicId from './ArticlesByTopicId';
import ArticleByArticleId from './ArticleByArticleId';
import UserByUsername from './UserByUsername';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="mainTitle">
          <h1><Link to={'/'}>Northcoders News</Link></h1>
        </header>
        <nav id='navHeader'>
          <span className='navButton'><Link to={'/'}>Home</Link> | </span>
          <span className='navButton'><Link to={`/articles`}>All articles</Link> | </span>
          {/* <span className='navButton'><Link to={`/users`}>All comments</Link> | </span */}
        </nav>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={`/articles`} component={Articles} />
          <Route path={`/articles/:articleId`} component={ArticleByArticleId}/>
          <Route path={`/topics/:topicId/articles`} component={ArticlesByTopicId} />
          <Route path={`/users/:username`} component={UserByUsername} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
