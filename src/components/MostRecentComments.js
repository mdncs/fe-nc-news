import React from 'react';
import { Link } from 'react-router-dom';

function MostRecentComments ({ comments, users, articles }) {
    return <div>
        <h3 className='subheading'>Most recent comments:</h3>
        <div className='recentComment'>
        {comments.map(({ _id, created_at, body, belongs_to, created_by }) => {
            const username = users.filter(({ _id }) => _id === created_by)[0].username;
            const articleTitle = articles.filter(({ _id }) => _id === belongs_to)[0].title;
            const articleId = articles.filter(({ _id }) => _id === belongs_to)[0]._id;
            return <div key={_id + `${created_at}`}>
                <p className='homePageItems'>{`" ${body} "`}</p>
                <p className='postedOn'>by <Link to={`/users/${username}`} className='postedBy'>{username}</Link> on 
                    <span> <Link to={`articles/${articleId}`} className='postedBy'>{articleTitle}</Link></span></p>
                    <br/>
            </div>
        })}
        </div>
    </div>
}

export default MostRecentComments;