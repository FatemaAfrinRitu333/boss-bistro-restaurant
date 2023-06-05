const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bistro Boss server is running')
})



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.wqcwecn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();


        const menuCollection = client.db('BistroBoss').collection('menu');
        const reviewCollection = client.db('BistroBoss').collection('review');
        const cartCollection = client.db('BistroBoss').collection('carts');
        const userCollection = client.db('BistroBoss').collection('users');

        // users API
        app.get('/users', async(req, res)=>{
            const result = await userCollection.find().toArray();
            res.send(result);
        })

        app.post('/users', async(req, res)=>{
            const user = req.body;
            const query = {email: user.email};
            const existingUser = await userCollection.findOne(query);
            // console.log('existing user: ', existingUser);
            if(existingUser){
                return res.send({message: 'user already exists'});
            }
            const result = await userCollection.insertOne(user);
            res.send(result);
        })

        app.patch('/users/admin/:id', async(req, res)=>{
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)};
            const updatedDoc = {
                $set:{
                    role: 'admin'
                },
            };
            const result = await userCollection.updateOne(filter, updatedDoc);
            res.send(result);
        })

        app.delete('/users/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })


        // menu API
        app.get('/menu', async(req, res)=>{
            const result = await menuCollection.find().toArray();
            res.send(result);
        })

        // review API
        app.get('/review', async(req, res)=>{
            const result = await reviewCollection.find().toArray();
            res.send(result);
        })


        // CART COLLECTION APIs

        app.get('/carts', async(req, res)=>{
            const email = req.query.email;
            if(!email){
                res.send([]);
            }
            const query = {email: email};
            const result = await cartCollection.find(query).toArray();
            res.send(result);
        })

        app.post('/carts', async(req, res)=>{
            const item = req.body;
            // console.log(item);
            const result = await cartCollection.insertOne(item);
            res.send(result);
        })

        app.delete('/carts/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await cartCollection.deleteOne(query);
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Bistro Boss server connected on port: ${port}`);
})

/**
 * 
 *      NAMING CONVENTION
 * users: userCollection
 * app.get/post/put('/users') || app.get/put/patch/delete('/users/:id')
*/