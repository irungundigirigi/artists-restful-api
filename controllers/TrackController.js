const dbClient = require("../model/db").client;

class TrackController {
    // get all tracks
    static async getTracks(req, res) {
        try {
            const query = 'SELECT * FROM track';
            const { rows } = await dbClient.query(query);
            res.json(rows);   

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // get a track by id
    static async getTrack(req, res) {
        try {
            const query = 'SELECT * FROM track WHERE track_id = $1';
            const { rows } = await dbClient.query(query, [req.params.id]);
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).json({ error: "Track not found" });
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // create a new track
    static async addTrack(req, res) {
        try {
            const data = req.body;
            const query = 'INSERT INTO track (album_id, track_title, song_source) VALUES ($1, $2, $3)';
            const values = [data.album_id, data.track_title, data.song_source];
            await dbClient.query(query, values);
            res.json({ message: "Track created!" });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // update an existing track
    static async updateTrack(req, res) {
        try {
            const data = req.body;
            const query = 'UPDATE track SET album_id = $1, track_title = $2, song_source = $3 WHERE track_id = $4';
            const values = [data.album_id, data.track_title, data.song_source, req.params.id];
            await dbClient.query(query, values);
            res.json({ message: "Track updated!" });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // delete a track
    static async deleteTrack(req, res) {
        try {
            const query = 'DELETE FROM track WHERE track_id = $1';
            await dbClient.query(query, [req.params.id]);
            res.json({ message: "Track deleted!" });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    static async getTracksByArtist(req, res) {
        try {
            const artistId = req.params.id;
            const query = `
                SELECT t.* 
                FROM tracks t
                JOIN discography a ON t.album_id = a.album_id
                WHERE a.artist_id = $1
            `;
            const { rows } = await dbClient.query(query, [artistId]);
            res.json(rows);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    
};

module.exports = TrackController;
