const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
require('dotenv').config()
app.use(express.json())

const port = process.env.PORT || 5000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://preciouscameras:<password>@cluster0.b6byypn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function fun() {
    try {
        const applicationCollections = client.db('LoanApplication').collection('applicationList');
        app.get('/', (req, res) => {
            res.send(`Server running: ${port}`);
        })
    }
    finally {
    }
}
fun().catch(error => console.log(error))


app.listen(port, () => {
    console.log(`The running port: `, port)
})