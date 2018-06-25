import React, { Component } from 'react';
import * as api from '../api';
import { Link } from 'react-router-dom';

class PostArticle extends Component {
    state = {
        topics: [],
        title: '',
        body: '',
        belongs_to: ''
    }

    componentDidMount() {
        return Promise.all([
            api.fetchTopics(),
            api.fetchUsers()
        ])
        .then(([topics, users]) => this.setState({ topics, users }))
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        });
    }
    
    render () {
        return <React.Fragment>
            <h2 className='allItemsTitle'>Post an article</h2>
            <p className='postItemSubheading'>Which topic do you wish to post your article in?</p>
            <span><select onChange={e => this.handleInput('belongs_to', e)}>
                <option selected disabled>Please choose a topic</option>
                {this.state.topics.map(topic => {
                    return <option value={topic._id} key={topic._id}>{topic.title}</option>
                })}
            </select></span>
            <p className='postItemSubheading'>Title <input onChange={e => this.handleInput('title', e)} type='text' placeholder='Title' /></p>
            <p className='postItemSubheading'>Body <textarea className='postTextBox' onChange={e => this.handleInput('body', e)}/></p>
            <p><Link to={`/articles`}><button className='submitButton' onClick={this.submitArticle}>Submit</button></Link></p>
        </React.Fragment>
    }

    handleInput = (key, e) => {
        const { value } = e.target;
        this.setState({
            [key]: value
        })
    }

    submitArticle = () => {
        const { title, body, belongs_to } = this.state;
        const newArticle = {
            title: title,
            body: body, 
            belongs_to: belongs_to
        }
        api.postArticle(belongs_to, newArticle)
        .catch(err => {
            if (err.response.status) alert(`Please fill in all the fields before posting`);
        })
    }
}

export default PostArticle;