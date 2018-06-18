import React, { Component } from 'react';
import * as api from '../api';
import { Link } from 'react-router-dom';


class Topics extends Component {
    state = {
        topics: []
    }

    componentDidMount() {
        api.fetchTopics()
        .then(topics => this.setState({ topics }))
        .catch(err => {
            if (err.response.status) this.props.history.push(`/${err.response.status}`);
        });
    }

    render() {
        const { topics } = this.state;
        return <React.Fragment>
            <h3 className='topicTitle'>Articles about: </h3>
                {topics.map(({ title, _id }) => {
                return <p className='topic' key={_id} className='topic'>
                        <Link to={`/topics/${_id}/articles`} className='link'> {title}</Link>
                    </p>
                })}
        </React.Fragment>
    }  
}

export default Topics;