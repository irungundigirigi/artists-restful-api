## **Sample-node-api**
#### This is a RESTful API built in Node.js and runs CRUD operations on static JSON data.

## Installation
### Clone the repository, install node packages and verify routes locally.
#### 1. git clone https://github.com/irungundigirigi/artists-restful-api.git
#### 2. cd artists-api
#### 3. npm install
#### 4. npm start

#### ### ALTERNATIVELY, you can verify the routes directly on  <a href ="https://artists-restful-api.herokuapp.com/api/artists" target="_blank" >Heroku</a>

## Testing
#### You can test the routes using your favourite tool eg postman or thunderclient for vs code

Description             |Method | URL
------------------------|-------|-----
Retrieve all artists    | GET   | /api/artists
Retrieve a single artist| GET   | /api/artists/:id
Create an artist        | POST  | /api/artists
Update an artist        | PUT   | /api/artists/id
Delete an artist        | DELETE| /api/artists/:id

