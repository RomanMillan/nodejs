
const mongoose = require('mongoose');
const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.MONGODB_CNN);
        console.log('Activo en la pista');
    } catch (error) {
        console.log(error);
        throw new Error('ALGO VA MAL DE COJONES');
    }
}
module.exports = {
    dbConnection
}
