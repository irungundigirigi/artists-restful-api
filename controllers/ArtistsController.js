const artists = require('../model/artists.json');

class ArtistsController {

    static async getArtists (req, res) {
        try {
            res.json(artists);   

        } catch (err) {
            console.error(err.message);
        }

    };

    static async getArtist (req, res) {
        try {
            user = await artists.find( artist => artist.id_no == req.params.id)
            res.json(artists[artists.indexOf(user)]);   

        } catch (err) {
            console.error(err.message);
        }
    };
};

module.exports = ArtistsController;