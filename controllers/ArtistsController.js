const artists = require('../model/artists.json');

class ArtistsController {
    // get all artists
    static async getArtists(req, res) {
        try {
            res.json(artists);   

        } catch (err) {
            console.error(err.message);
        }

    };
    // get an artist by id
    static async getArtist(req, res) {
        try {
            const user = await artists.find( artist => artist.id_no == req.params.id);
            if (user) {
            //res.json(artists[artists.indexOf(user)]);   
                res.json(user);
            } else {
                res.status(404).json({error:"Artist can not be found"});
            };

        } catch (err) {
            console.error(err.message);
        }
    };
    //create a new artist
    static async addArtist(req,res) {
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
            }
        }catch(err){
            console.error(err.message);
    
        }
    }
    
    // update an existing artist
    static async updateArtist(req,res) {
        try{
            const user = await artists.find( artist => artist.id_no == req.params.id)
    
            if(user){
                artists[artists.indexOf(user)] = req.body
            res.json(artists)
            }else{
                res.json({message:"user does not exist"})
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            
        }catch(err){
            console.error(err.message);
    
        }
    };
    // delete an artist
    static async deleteArtist(req,res) {
        try{
            const user = await artists.find( artist => artist.id_no == req.params.id)
            
            if(user){
                artists.splice(artists.indexOf(user),1) 
            
            res.json(artists)
            }else{
                res.json({message:"user does not exist"})
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            
        }catch(err){
            console.error(err.message);
    
        }
    };

    
};

module.exports = ArtistsController;