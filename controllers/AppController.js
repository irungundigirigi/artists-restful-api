const database_client = require('../model/db.js');

class AppController {
    static async getApiStatus(req, res) {
        const response = await database_client.isAlive(); 
        res.status(200).json({online: response});
    };
};

module.exports = AppController;