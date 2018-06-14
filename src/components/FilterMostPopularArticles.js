import React from 'react';

function FilterMostPopularArticles ({ articles, topics, users }) {
    return <div id='popularArticle'>
        <h3 className='subheading'>Most popular articles:</h3>
        {articles.map(({ _id, votes, title, belongs_to, created_by }) => {
            const username = users.filter(({ _id }) => _id === created_by._id)[0].username;
            const topicTitle = topics.filter(({ _id }) => _id === belongs_to)[0].title;
            return <div key={title + _id}>
                <h4>{title}</h4>
                <h6 className='postedOn'>Posted by <a href={`/users/${username}`}>{username}</a> in
                             <span> <a href={`/topics/${topicTitle.toLowerCase()}`}>{topicTitle}</a></span></h6>
            </div>
        })}
    </div>
}

export default FilterMostPopularArticles;