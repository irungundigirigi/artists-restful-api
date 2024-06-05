# Artists Management API

## Description
This API provides endpoints to manage musicians. It allows you to perform CRUD operations (Create, Read, Update, Delete) on musician data.

## Endpoints

# Artists Management API

## Description
This API provides endpoints to manage musicians, albums, and tracks. It allows you to perform CRUD operations (Create, Read, Update, Delete) on artist, album, and track data.

## Endpoints

### Artist Routes
- `GET /api/v1/status`: Retrieve the status of the API.
- `GET /api/v1/artists/:id`: Retrieve information about a specific artist by ID.
- `GET /api/v1/artists`: Retrieve a list of all artists.
- `POST /api/v1/artists`: Add a new artist to the system.
- `PUT /api/v1/artists/:id`: Update the details of an existing artist.
- `DELETE /api/v1/artists/:id`: Delete an existing artist from the system.
- `GET /api/v1/artists/:id/tracks`: Retrieve a list of tracks by a specific artist.

### Album Routes
- `GET /api/v1/albums`: Retrieve a list of all albums.
- `GET /api/v1/albums/:id`: Retrieve information about a specific album by ID.
- `POST /api/v1/albums`: Add a new album to the system.
- `PUT /api/v1/albums/:id`: Update the details of an existing album.
- `DELETE /api/v1/albums/:id`: Delete an existing album from the system.

### Track Routes
- `GET /api/v1/tracks`: Retrieve a list of all tracks.
- `GET /api/v1/tracks/:id`: Retrieve information about a specific track by ID.
- `POST /api/v1/tracks`: Add a new track to the system.
- `PUT /api/v1/tracks/:id`: Update the details of an existing track.
- `DELETE /api/v1/tracks/:id`: Delete an existing track from the system.

## Getting Started
To use this API, follow these steps:

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Access the API endpoints using a REST client such as Postman or cURL.

## Dependencies
- Express: Web framework for Node.js

## Database Configuration (PostgreSQL)
1. Install PostgreSQL.
2. Create a new database using the command: `createdb artists_database`.
3. Connect to the newly created database using the command: `psql -d artists_database`.
4. Run the following SQL commands to create necessary tables:

```sql
CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255),
    bio TEXT
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    artist_id INT REFERENCES artists(id),
    title VARCHAR(255) NOT NULL,
    release_year INT
);

CREATE TABLE tracks (
    id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums(id),
    title VARCHAR(255) NOT NULL,
    duration INT
);


## Getting Started
To use this API, follow these steps:

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Access the API endpoints using a REST client such as Postman or cURL.

## Usage
- To retrieve information about a specific artist, send a GET request to `/api/artists/:id`.
- To retrieve a list of all artists, send a GET request to `/api/artists`.
- To add a new artist, send a POST request to `/api/artists` with the artist's details in the request body.
- To update the details of an existing artist, send a PUT request to `/api/artists/:id` with the updated details in the request body.
- To delete an existing artist, send a DELETE request to `/api/artists/:id`.

## Dependencies
- Express: Web framework for Node.js

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
