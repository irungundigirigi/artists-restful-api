const dbClient = require("../model/db").client;

class AlbumController {
    // Get all albums
    static async getAlbums(req, res) {
        try {
            const query = 'SELECT * FROM discography';
            const { rows } = await dbClient.query(query);
            res.json(rows);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Get an album by ID
    static async getAlbum(req, res) {
        try {
            const query = 'SELECT * FROM discography WHERE album_id = $1';
            const { rows } = await dbClient.query(query, [req.params.id]);
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).json({ error: "Album not found" });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Create a new album
    static async addAlbum(req, res) {
        try {
            const data = req.body;
            
            // Check if album ID already exists
            const albumExistsQuery = 'SELECT * FROM discography WHERE album_id = $1';
            const albumExistsValues = [data.album_id];
            const albumExistsResult = await dbClient.query(albumExistsQuery, albumExistsValues);
            
            if (albumExistsResult.rows.length > 0) {
                return res.status(400).json({ error: 'Album ID already exists' });
            }
    
            // If album ID doesn't exist, insert the new album
            const insertQuery = 'INSERT INTO discography (album_id, artist_id, album_title, release_date) VALUES ($1, $2, $3, $4)';
            const insertValues = [data.album_id, data.artist_id, data.album_title, data.release_date];
            await dbClient.query(insertQuery, insertValues);
            
            res.json({ message: "Album created!" });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    

    // Update an existing album
    static async updateAlbum(req, res) {
        try {
            const data = req.body;
            const query = 'UPDATE discography SET artist_id = $1, album_title = $2, release_date = $3 WHERE album_id = $4';
            const values = [data.artist_id, data.album_title, data.release_date, req.params.id];
            await dbClient.query(query, values);
            res.json({ message: "Album updated!" });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Delete an album
    static async deleteAlbum(req, res) {
        try {
            const query = 'DELETE FROM discography WHERE album_id = $1';
            await dbClient.query(query, [req.params.id]);
            res.json({ message: "Album deleted!" });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = AlbumController;
