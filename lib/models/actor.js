const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./award');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    awards: [{
        type: Schema.Types.ObjectId,
        ref: 'Award'
    }]
});

module.exports = mongoose.model('Actor', schema);