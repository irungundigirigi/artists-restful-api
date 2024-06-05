const router = require('express').Router();
const ArtistsController = require('../controllers/ArtistsController');
const AppController = require("../controllers/AppController");
const AlbumController = require('../controllers/AlbumController');
const TrackController = require('../controllers/TrackController');


router.get("/api/v1/status", AppController.getApiStatus)
router.get("/api/v1/artists/:id", ArtistsController.getArtist);
router.get("/api/v1/artists", ArtistsController.getArtists);
router.post("/api/v1/artists", ArtistsController.addArtist);
router.put("/api/v1/artists/:id", ArtistsController.updateArtist);
router.delete("/api/v1/artists/:id", ArtistsController.deleteArtist);
router.get('/api/v1/artists/:id/tracks', ArtistsController.getTracksByArtist);

//album routes
router.get('/api/v1/albums', AlbumController.getAlbums);
router.get('/api/v1/albums/:id', AlbumController.getAlbum);
router.post('/api/v1/albums', AlbumController.addAlbum);
router.put('/api/v1/albums/:id', AlbumController.updateAlbum);
router.delete('/api/v1/albums/:id', AlbumController.deleteAlbum);

// track routes
router.get('/api/v1/tracks', TrackController.getTracks);
router.get('/api/v1/tracks/:id', TrackController.getTrack);
router.post('/api/v1/tracks', TrackController.addTrack);
router.put('/api/v1/tracks/:id', TrackController.updateTrack);
router.delete('/api/v1/tracks/:id', TrackController.deleteTrack);

module.exports = router;