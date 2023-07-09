const { MongoClient, ServerApiVersion } = require("mongodb");



const uri = "mongodb+srv://Mobile_Reseller:DycM6Y4reEat7ryS@cluster0.jnkxtnw.mongodb.net/?retryWrites=true&w=majority";



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


module.exports = client;
