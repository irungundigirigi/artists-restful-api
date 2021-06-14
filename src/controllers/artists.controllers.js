const artists = require('../model/artists');
const router = require('express').Router();

//get artists
router.get("/api/artists",async(req,res) => {
    try{
        res.json(artists);   
        
    }catch(err){
        console.error(err.message);

    }
});
//get an artist
router.get("/api/artists/:id",async(req,res) => {
    try{
        user = await artists.find( artist => artist.id_no == req.params.id)

        res.json(artists[artists.indexOf(user)]);   
        
    }catch(err){
        console.error(err.message);

    }
});



//create an artist
router.post("/api/artists",async(req,res) => {
    try{
        const data= req.body
        const user =  await artists.find( artist => artist.id_no === req.body.id_no)

        if(user){
            res.json({
                "error": "User already exist"
            })
        }else{
            artists.push(data)
            res.json(
                {"message": "Artist created!"}
            )
            res.json(artists);
        }
    }catch(err){
        console.error(err.message);

    }
});
//update an artist
router.put("/api/artists/:id",async(req,res) => {
    try{
        user = await artists.find( artist => artist.id_no == req.params.id)

        if(user){
            artists[artists.indexOf(user)] = req.body
        res.json(artists)
        }else{
            res.json({message:"user does not exist"})
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        
    }catch(err){
        console.error(err.message);

    }
});
//delete an artist
router.delete("/api/artists/:id",async(req,res) => {
    try{
        user = await artists.find( artist => artist.id_no == req.params.id)
        
        if(user){
            artists.splice(artists.indexOf(user),1) 
        res.json(artists)
        }else{
            res.json({message:"user does not exist"})
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        
    }catch(err){
        console.error(err.message);

    }
});








module.exports = router;

