import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
    name: {type: String, default: '', trim: true},
    age: {type: Number, default: 0, trim: true},
    country: {type: String, default: '', trim: true},
})

export const userModel = mongoose.model('user', userScheme)
