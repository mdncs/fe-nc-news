import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

const userPlaceholderImg = "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fnpengage.com%2Fwp-content%2Fplugins%2Fall-in-one-seo-pack%2Fimages%2Fdefault-user-image.png&sp=2476c6298b8e89ecfe9b82345689031e";

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        api.fetchUsers().then(users => this.setState({ users }))
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        });
    }

    render() {
        return <div>
            {this.state.users.map(({ name, _id, username, avatar_url }) => {
                return <div className='user' key={_id}>
                    <h2 className='userProfile' >Name: {name}</h2>
                    <h2 className='userProfile'>Username: <Link to={`/users/${username}`}>{username}</Link></h2>
                    <img id='avatarImg' src={avatar_url} onError={(e) => e.target.src = `${userPlaceholderImg}`} alt='avatar' />
                </div>
            })}
        </div>
    }
}

export default Users;