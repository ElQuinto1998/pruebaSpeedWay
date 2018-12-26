const mongoose = require('mongoose');

const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    password: String,
});

UserSchema.methods.encyipt = async (password) => {
    return  await bcrypt.hashSync(password, bcrypt.genSaltSync(15));
}

UserSchema.methods.validatePass = function() {
    return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model('sw_users' ,UserSchema);