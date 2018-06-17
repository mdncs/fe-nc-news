import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../index.css';
import HomePage from './HomePage';
import Articles from './Articles';
import Topics from './Topics';
import Users from './Users';
import ArticlesByTopicId from './ArticlesByTopicId';
import ArticleByArticleId from './ArticleByArticleId';
import UserByUsername from './UserByUsername';
import PostArticle from './PostArticle';
import CommentsByArticleId from './CommentsByArticleId';
import Error404 from './Error404';
import Error400 from './Error400';

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
          <span className='navButton'><Link to={`/submit`}>Post an article</Link> | </span>

        </nav>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={`/topics`} component={Topics} />
          <Route exact path={`/articles`} component={Articles} />
          <Route exact path={`/articles/:articleId`} component={ArticleByArticleId} />
          <Route path={`/submit`} component={PostArticle} />
          <Route path={`/topics/:topicId/articles`} component={ArticlesByTopicId} />
          <Route exact path={`/users`} component={Users} />
          <Route path={`/users/:username`} component={UserByUsername} />
          <Route path={`/articles/:articleId/comments`} component={CommentsByArticleId} />
          <Route path={`/404`} component={Error404} />
          <Route path={`/400`} component={Error400} />
          <Route path={'/*'} component={Error404} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
