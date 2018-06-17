import React, { Component } from 'react';
import * as api from '../api';

class VoteArticle extends Component {
    state = {
        article: {}
    }

    componentDidMount() {
        api.fetchArticlebyArticleId(this.props.match.params.articleId).then(article => this.setState({ article }));
    }

    render() {
        const { article, errMessage } = this.state;
        return (
            <div className='votingAndPosting'>
                <div className='votesCount'>
                    <label>Votes: {article.votes}</label>
                </div>
                <div className='voteButtons'>
                    <button className='voteButton' onClick={() => this.handleVoteClick(true)}><span className='voteImg' role="img" aria-label="thumbsUp">⬆️</span></button>
                    <button className='voteButton' onClick={() => this.handleVoteClick(false)}><span className='voteImg' role="img" aria-label="thumbsUp">⬇️</span></button>
                    {errMessage && <h4>{errMessage}</h4>}
                </div>
            </div>
        )
    }

    handleVoteClick = up => {
        const { article } = this.state;
        const newArticle = Object.assign({}, { ...article, votes: up ? article.votes + 1 : article.votes - 1});
        api.voteArticle(article._id, up ? 'up' : 'down')
        .then(article => this.setState({ article: { ...newArticle } }))
        .then(api.fetchArticles());
    }
}

export default VoteArticle;