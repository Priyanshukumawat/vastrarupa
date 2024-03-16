const { app } = require('./app')
const mongoose = require('mongoose');

// connection with mongo

const MONGO_URL = process.env.MONGO2_URL;
const connection = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to DB");
    }).catch((err) => {
        console.log(`Error connection failed to DB ${err}`);
    })
}

// server connection

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    connection();
    console.log("connected to server!");
})
