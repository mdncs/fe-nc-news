import React, { Component } from 'react';


class Topics extends Component {

    render () {
        const { topics } = this.props;
        return <div>
            <h4 className='containerTitle'>Topics:</h4>
            {topics.map(({ title, _id }) => {
                return <h5 id='topic' key={_id}>
                    <a href={`/topics/${_id}`}>{title}</a>
                </h5>
            })}
        </div>
    }
}

export default Topics;