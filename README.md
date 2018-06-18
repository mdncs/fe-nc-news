#Northcoders News Reddit-like App

#Project Title

This is a repository for a basic news website based on the NC-news API built with Express.js and MongoDB with Mongoose models.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
The packages and dependences required for running this API are available in the package.json file and can be installed by running the following command: npm i

This app uses React.js 16.4.0 with React Dom 16.4.0, React Router Dom 4.3.1 and React Scripts 1.1.4.
Axios 0.18.0 has been used for fetching data from the API database.

Installing

All packages needed can be found in the package.json file and can be installed by running npm install.

Step 1 - Starting the deployment server on port 3000

"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test --env=jsdom",
"eject": "react-scripts eject"

Routes
Topics

GET /api: Serves an HTML page with documentation for all the available endpoints

GET /api/topics: Gets all the topics

GET /api/topics/:topic_id/articles: Returns all the articles for a certain topic

POST /api/topics/:topic_id/articles: Adds a new article to a topic. This route requires a JSON body with title and body key value pairs e.g: { "title": "this is my new article title" "body": "This is my new article content" }

Articles

GET /api/articles: Returns all the articles

GET /api/articles/:article_id: Gets an individual article

GET /api/articles/:article_id/comments: Gets all the comments for a individual article

POST /api/articles/:article_id/comments: Adds a new comment to an article. This route requires a JSON body with a comment key and value pair e.g: {"comment": "This is my new comment"}

PUT /api/articles/:article_id: Increments or Decrements the votes of an article by one. This route requires a vote query of 'up' or 'down' e.g: /api/articles/:article_id?vote=up

Comments

PUT /api/comments/:comment_id: Increments or Decrements the votes of a comment by one. This route requires a vote query of 'up' or 'down' e.g: /api/comments/:comment_id?vote=down

DELETE /api/comments/:comment_id: Deletes a comment

Users

GET /api/users/:username: Returns a JSON object with the profile data for the specified user.

Step 3 - Deployment

The API used for the Northcoders News is hosted on Heroku here: https://be2-nc-news.herokuapp.com

The React App is also hosted on Heroku here: https://fe-nc-news-react.herokuapp.com/
