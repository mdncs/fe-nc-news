import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';


class Topics extends Component {
    state = {
        topics: []
    }

    componentDidMount() {
        api.fetchTopics().then(topics => {
            this.setState({topics});
        })
    }
    render () {
        const { topics } = this.state;
        return <div>
            <h4 className='containerTitle'>Browse articles by topic:</h4>
            {topics.map(({ title, _id }) => {
                return <h5 id='topic' key={_id}>
                    <Link to={`/topics/${_id}/articles`}>{title}</Link>
                    
                </h5>
            })}
        </div>
    }
}

export default Topics;