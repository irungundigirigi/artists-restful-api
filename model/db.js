const { Client } = require('pg');

const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 5432; // PostgreSQL default port
const USER = process.env.DB_USER || 'postgres'; // Default user
const PASSWORD = process.env.DB_PASSWORD || 'password'; // Default password
const DATABASE = process.env.DB_DATABASE || 'artist_management_db';
const connectionString = `postgresql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

class DBClient {
  constructor() {
    this.client = new Client({
      connectionString: connectionString
    });

    this.client.connect()
      .then(() => console.log('Connected to PostgreSQL'))
      .catch((err) => console.error('Error connecting to PostgreSQL', err));
  }

  async isAlive() {
    try {
      await this.client.query('SELECT 1');
      return true;
    } catch (error) {
      console.error('Error checking PostgreSQL connection:', error);
      return false;
    }
  }
}

const dbClient = new DBClient();

module.exports = dbClient;
