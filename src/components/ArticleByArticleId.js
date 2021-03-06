import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';
import VoteArticle from './VoteArticle';
import CommentsByArticleId from './CommentsByArticleId';
import { filterItem } from '../utils';

class ArticleByArticleId extends Component {
    state = {
        article: null,
        users: [],
        topics: []
    }

    componentDidMount() {
        const { articleId } = this.props.match.params;
        return Promise.all([
            api.fetchArticlebyArticleId(articleId),
            api.fetchUsers(),
            api.fetchTopics()
        ])
       .then(([article, users, topics]) => this.setState({ article, users, topics }))
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        });
    };

    render() {
        const { article, users, topics } = this.state;
        if (!article) return null;
        else {
            const username = filterItem(users, article.created_by).username;
            const topic = filterItem(topics, article.belongs_to);
            return <React.Fragment>
                <div id='articleData'>
                    <h1 id='articleTitle'><Link to={`/articles/${article._id}`} key={article._id} className='link'>{article.title}</Link></h1>
                    <h5 className='authorName'>by <Link to={`/users/${username}`} className='link'>{username}</Link></h5>
                    <p id='articleBody'>{article.body}</p>
                    <div id='articleVotes'>
                        <VoteArticle {...this.props}/>
                    </div>
                    <h6 className='moreBy'><Link to={`/users/${username}`} className='link'>(more articles by {username})</Link></h6>
                    <footer id='browseMoreArticles'>Browse more articles in <Link to={`/topics/${topic._id}/articles`} className='link'>{topic.title}</Link> </footer>
                </div>
                <div id='commentData'>
                    <h2 className='allItemsTitle'>All <Link to={`/articles/${article._id}/comments`} className='link'>comments</Link> for this article</h2>
                    <h3 className='postItemSubheading'>Post a comment</h3>
                    <CommentsByArticleId {...this.props} />
                </div>
            </React.Fragment>
        }      
    }
}

export default ArticleByArticleId;