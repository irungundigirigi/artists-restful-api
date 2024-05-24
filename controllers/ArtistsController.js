const artists = require('../model/artists.json');

class ArtistsController {

    static async getArtists(req, res) {
        try {
            res.json(artists);   

        } catch (err) {
            console.error(err.message);
        }

    };

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
    

    static async updateArtist(req,res) {
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
    };

    static async deleteArtist(req,res) {
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
    };

    
};

module.exports = ArtistsController;