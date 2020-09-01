const express = require('express');
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const app = express();

// Connection URL
const url = 'mongodb://localhost:27017';

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Database Name
const dbName = 'marketdb';

// const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
app.get('/', (req, res) => {
    MongoClient.connect(url, (err, database) => {
        if (err) {
            throw err;
        }
        const productDb = database.db('productscollaction', (err) => {
            if (err) {
                errorFunction(err);
            };
            console.log("databas added/created succesfully");
        });
        var productscollaction = productDb.collection("fruits", (err) => {
            if (err) {

                console.log(`productscollaction=productDb ${err}`);
            };
            console.log("collaction added/created succesfully");
        });
        mm = productscollaction.insertOne({ _id: 1, name: "banana", price: 3.50 })
        console.log(mm)
        database.close();
    })
    fruit= { _id: 1, name: "banana", price: 3.50 }
    res.render("index", { user:fruit })
});
// products.insertOne({ _id: 1, name: "banana", price: 3.50 }, (err) => {
//     console.log(err);
//     console.log(" prodects added successfully");
//     client.close();
//     lose();
// });
//     products.deleteOne({_id:2}, (err) =>{
//         console.log(err);
//         console.log(" prodects deleted successfully");
//         client.close();
//     })
// client.close();

// }

// });
// MongoClient.connect(function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Connected successfully to server");

//         // const db = client.db(dbName);
//         // const products = db.collection("products");
//         app.get('/', (req, res) => {

// app.listen(port);