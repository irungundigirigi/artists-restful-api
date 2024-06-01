const dbClient = require("../model/db").client;

class ArtistsController {
    // get all artists
    static async getArtists(req, res) {
        try {
            const query = 'SELECT * FROM artists';
            const { rows } = await dbClient.query(query);
            res.json(rows);   

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // get an artist by id
    static async getArtist(req, res) {
        try {
            const query = 'SELECT * FROM artists WHERE id_no = $1';
            const { rows } = await dbClient.query(query, [req.params.id]);
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).json({ error: "Artist not found" });
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // create a new artist
    static async addArtist(req, res) {
        try {
            const data = req.body;
            const query = 'INSERT INTO artists (profile_pic, id_no, first_name, last_name, stage_name, sex, date_of_birth, email, genre, records_sold, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
            const values = [data.profile_pic, data.id_no, data.first_name, data.last_name, data.stage_name, data.sex, data.date_of_birth, data.email, data.genre, data.records_sold, data.active];
            await dbClient.query(query, values);
            res.json({ message: "Artist created!" });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // update an existing artist
    static async updateArtist(req, res) {
        try {
            const data = req.body;
            const query = 'UPDATE artists SET profile_pic = $1, first_name = $2, last_name = $3, stage_name = $4, sex = $5, date_of_birth = $6, email = $7, genre = $8, records_sold = $9, active = $10 WHERE id_no = $11';
            const values = [data.profile_pic, data.first_name, data.last_name, data.stage_name, data.sex, data.date_of_birth, data.email, data.genre, data.records_sold, data.active, req.params.id];
            await dbClient.query(query, values);
            res.json({ message: "Artist updated!" });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    // delete an artist
    static async deleteArtist(req, res) {
        try {
            const query = 'DELETE FROM artists WHERE id_no = $1';
            await dbClient.query(query, [req.params.id]);
            res.json({ message: "Artist deleted!" });

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
};

module.exports = ArtistsController;
