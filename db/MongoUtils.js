const MongoClient = require("mongodb").MongoClient;
const dotenv = require('dotenv');

function MongoUtils(){

    const dbName = "TheSocialDistancerData";
    const mu = {};
    dotenv.config();
    const url = process.env.MONGO_URI;

    mu.connect = () => {
        client = new MongoClient(url, {useUnifiedTopology: true});
        return client.connect();
    };

    mu.addUser = (user) => 
    mu.connect().then(client => {
        console.log("Adding user to MongoDB");
        const usersCollection = client.db(dbName).collection('users'); 
        return usersCollection.insertOne(user).finally(() => client.close());

    });

    mu.addGameData = (usergamedata) =>
    mu.connect().then(client =>{
        console.log("Adding user Game data to MongoDB");
        const usersCollection = client.db(dbName).collection('GameData'); 
        return usersCollection.insertOne(usergamedata).finally(() => client.close());
    });

    mu.verifyNewUser = (user, cb) => 
    mu.connect().then(client => {
        console.log("Verifying that username and email isn't in DB");
        const usersCollection = client.db(dbName).collection('users');
        usersCollection.find({ $or: [{"username": user.username}, {"email": user.email}]}).limit(1).toArray()
        .then(userreturned => {
            console.log("User returned:", userreturned[0]);
            client.close();
            if(userreturned[0] !== undefined)
            {
                console.log("Passed as not undefined. User already exists.");
                return cb(null);
            }
            else{
                console.log("Passed as undefined. New user.");
                mu.addUser(user);
                const valid = true;
                return cb(valid);
            }
        });
    });

    mu.findUser = (username, cb) =>
    {   mu.connect().then(client => {
            const userCollection = client.db(dbName).collection('users');
            userCollection.find({"username": username}).limit(1).toArray()
            .then(user => {
                console.log('user is', user[0].username);
                client.close();
                if(user[0].username !== null)
                {   
                    return cb(null, user[0]);
                }
                return cb(null, null);
            });
               
        });
    };

    return mu;

}

module.exports = MongoUtils();