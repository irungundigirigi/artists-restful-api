const router = require('express').Router();
const ArtistsController = require('../controllers/ArtistsController');

router.get("/api/artists/:id", ArtistsController.getArtist);
router.get("/api/artists", ArtistsController.getArtists);

module.exports = router;