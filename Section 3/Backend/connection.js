const mongoose = require("mongoose");

const databaseName = "datamern";
const url = `mongodb+srv://Aditya:akd889977@cluster0.yjttxm4.mongodb.net/${databaseName}?retryWrites=true&w=majority`

//assync function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log('result');
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;