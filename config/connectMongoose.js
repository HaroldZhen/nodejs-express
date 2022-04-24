const mongoose = require('mongoose');

const connectMongoose = async () => {
    try {
        console.log(process.env.DB_HOST)
        await mongoose.connect(process.env.DB_HOST)
    } catch (err) {
        console.error(err)
    }
}

module.exports = connectMongoose
