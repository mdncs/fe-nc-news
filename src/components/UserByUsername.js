import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

const userPlaceholderImg = "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fnpengage.com%2Fwp-content%2Fplugins%2Fall-in-one-seo-pack%2Fimages%2Fdefault-user-image.png&sp=2476c6298b8e89ecfe9b82345689031e";

class UserByUsername extends Component {
    state = {
        user: null,
        articles: []
    }

    componentDidMount() {
        const { username } = this.props.match.params;
        return Promise.all([
            api.fetchUserByUsername(username),
            api.fetchArticles()
        ])
        .then(([user, articles]) => this.setState({ user, articles }))
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        });
    }

    render() {
        const { user, articles } = this.state;
        const articlesByUser = articles.filter(({ created_by }) => created_by._id === user._id).sort((a, b) => b.votes - a.votes);
        if (!user || !articles.length) return null;
        return <div>
            <h1 className='userProfile'>Hi there, I'm {user.name}!</h1>
            <h2 className='userProfile'>my username is {user.username}</h2>
            <img id='avatarImg' src={user.avatar_url} onError={(e) => e.target.src = `${userPlaceholderImg}`} alt='avatar'/>
            <h3 className='userProfile'>I know you're curious so here's some recent articles I posted: </h3>
                {articlesByUser.map(article => {
                    return <div>
                        <h4 key={article._id}>- <Link to={`../articles/${article._id}`} key={article._id} className='link'>{article.title}</Link> ({article.votes} votes) </h4>
                    </div>
                })}
        </div>
    }
}

export default UserByUsername;