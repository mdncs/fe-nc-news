import React from 'react';
import { Link } from 'react-router-dom';
import { filterItem, getTimeDiff } from '../utils';

function MostRecentComments ({ comments, users, articles }) {
    return <div>
        <h3 className='subheading'>Most recent comments:</h3>
        <div className='recentComment'>
        {comments.map(({ _id, created_at, body, belongs_to, created_by }) => {
            const username = filterItem(users, created_by).username;
            const article = filterItem(articles, belongs_to);
            return <div key={_id + `${created_at}`}>
                <p className='homePageItems'>{`" ${body} "`} - posted {getTimeDiff(created_at)}</p>
                <p className='postedOn'>by <Link to={`/users/${username}`} className='postedBy'>{username}</Link> on 
                    <span> <Link to={`articles/${article._id}`} className='postedBy'>{article.title}</Link></span></p>
                    <br/>
            </div>
        })}
        </div>
    </div>
}

export default MostRecentComments;