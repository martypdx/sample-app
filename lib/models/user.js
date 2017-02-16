const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: { type: String, required: true },
    hash: { type: String, required: true },
    roles: [{
        type: String,
        enum: ['admin']
    }]
});

// a mongoose "virtual" property acts like a normal property
// but we specify the get (model.prop) and/or set (model.prop =) of that property
userSchema.virtual('password').set(function(password) {
    this.hash = bcrypt.hashSync(password, 8);
});

// when user sign's in, we compare supplied password
// against our stored hash
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash);
};

module.exports = mongoose.model('User', userSchema);