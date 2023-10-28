import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {String, unique: true, required: true},
    email: {String, unique: true, required: true},
    password: {String, required: true},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
