import axios from 'axios';

const url = 'https://be2-nc-news.herokuapp.com/api';

export const fetchArticles = () => {
    return axios.get(`${url}/articles`).then(res => res.data.articlesArr);
};

export const fetchArticlesByTopicId = id => {
    return axios.get(`${url}/topics/${id}/articles`).then(res => {
        return res.data.articles;
    });
};

export const fetchArticlebyArticleId = id => {
    return axios.get(`${url}/articles/${id}`).then(res => res.data.article);
};

export const fetchTopics = () => {
    return axios.get(`${url}/topics`).then(res => res.data.topics);
};


export const fetchComments = () => {
    return axios.get(`${url}/comments`).then(res => res.data.comments);
};

export const fetchUsers = () => {
    return axios.get(`${url}/users`).then(res => res.data.users);
};

export const fetchUserByUsername = username => {
    return axios.get(`${url}/users/${username}`).then(res => res.data.user)
};

export const fetchCommentsByArticleId = id => {
    return axios.get(`${url}/articles/${id}/comments`).then(res => res.data.comments);
}

export const postArticle = (topicId, article) => {
    return axios.post(`${url}/topics/${topicId}/articles`, article).then(res => res.data.article);
}

export const postComment = (articleId, comment) => {
    return axios.post(`${url}/articles/${articleId}/comments`, comment).then(res => res.data.comment);
}

export const voteArticle = (id, direction) => {
    return axios.put(`${url}/articles/${id}?vote=${direction}`).then(res => res.data);
};

export const voteComment = (id, direction) => {
    return axios.put(`${url}/comments/${id}?vote=${direction}`).then(res => res.data);
};

export const deleteComment = id => {
    return axios.delete(`${url}/comments/${id}`).then(res => res.data.comment);
}