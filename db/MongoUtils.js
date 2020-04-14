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

    //There's another easier approach for this. Instead of verifying if a user exists and then create it if it doesn't exist (verifyUser -> addUser),
    //create a findOrCreate function with contains both steps in one. Read more: https://stackoverflow.com/questions/16358857/mongodb-atomic-findorcreate-findone-insert-if-nonexistent-but-do-not-update
    mu.findOrCreate = (user, cb) => 
    {   const {username, email} = user;
        return mu.connect().then(client => {
        const usersCollection = client.db(dbName).collection('users');
        userCollection.findAndModify({
            query: { $or: [{username}, {email}]},
            update: { $setOnInsert: {user}},
            new: true,   // return new doc if one is upserted
            upsert: true 
        }).finally(() => client.close());
    })};
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

    //{username: username} is redundant, JSON with pick username's value and assign it to "username" key.
    mu.findUser = (username, cb) =>
    {   mu.connect().then(client => {
            const userCollection = client.db(dbName).collection('users');
            userCollection.find({username}).limit(1).toArray()
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
