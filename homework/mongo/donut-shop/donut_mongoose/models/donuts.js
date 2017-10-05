//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create your donut schema:


const DonutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: String,
    price: Number,
    quantity: Number
});

const DonutModel = mongoose.model('Donut', DonutSchema);

//export your donut with module.exports()
module.exports = DonutModel;