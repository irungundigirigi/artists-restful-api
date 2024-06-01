const router = require('express').Router();
const ArtistsController = require('../controllers/ArtistsController');
const AppController = require("../controllers/AppController");
router.get("/api/v1/status", AppController.getApiStatus)
router.get("/api/v1/artists/:id", ArtistsController.getArtist);
router.get("/api/v1/artists", ArtistsController.getArtists);
router.post("/api/v1/artists", ArtistsController.addArtist);
router.put("/api/v1/artists/:id", ArtistsController.updateArtist);
router.delete("/api/v1/artists/:id", ArtistsController.deleteArtist);

module.exports = router;