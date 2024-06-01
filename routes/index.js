const router = require('express').Router();
const ArtistsController = require('../controllers/ArtistsController');
const AppController = require("../controllers/AppController");
router.get("/api/v1/status", AppController.getApiStatus)
router.get("/api/artists/:id", ArtistsController.getArtist);
router.get("/api/artists", ArtistsController.getArtists);
router.post("/api/artists", ArtistsController.addArtist);
router.put("/api/artists/:id", ArtistsController.updateArtist);
router.delete("/api/artists/:id", ArtistsController.deleteArtist);

module.exports = router;