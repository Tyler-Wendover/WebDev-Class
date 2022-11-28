require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');

//Hides the password in the .env file
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = {
    connect: () => client.connect(),
}
