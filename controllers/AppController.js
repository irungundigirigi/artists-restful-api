const database_client = require('../model/db.js');

class AppController {
    static async getApiStatus(req, res) {
        const response = await database_client.isAlive(); 
        if (response){
            res.status(200).json({api_status: "on"});
        }
    };
};

module.exports = AppController;