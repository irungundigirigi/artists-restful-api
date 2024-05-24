const router = require('express').Router();
const ArtistsController = require('../controllers/ArtistsController');

router.get("/api/artists/:id", ArtistsController.getArtist);
router.get("/api/artists", ArtistsController.getArtists);
router.post("/api/artists", ArtistsController.addArtist);
router.put("/api/artists/:id", ArtistsController.updateArtist);
router.delete("/api/artists", ArtistsController.deleteArtist);

module.exports = router;