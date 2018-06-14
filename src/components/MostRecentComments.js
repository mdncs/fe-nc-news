import React from 'react';

function MostRecentComments ({ comments, users, articles }) {
    return <div className='subheading'>
        <h3>Most recent comments:</h3>
        {comments.map(({ _id, created_at, body, belongs_to, created_by }) => {
            const username = users.filter(({ _id }) => _id === created_by)[0].username;
            const articleTitle = articles.filter(({ _id }) => _id === belongs_to)[0].title;
            const articleId = articles.filter(({ _id }) => _id === belongs_to)[0]._id;
            return <div key={_id + `${created_at}`}>
                <h6 id='recentComment'>{body}</h6>
                <h6 className='postedOn'>Posted by <a href={`/users/${username}`}>{username}</a> on 
                    <span> <a href={`articles/${articleId}`}>{articleTitle}</a></span></h6>
            </div>
        })}
    </div>
}

export default MostRecentComments;