import mongoose from 'mongoose';

const scheme = new mongoose.Schema({
    title: {type: String, default: '', trim: true},
    text: {type: String, default: '', trim: true},
    time: Date,
})

export const postModel = mongoose.model('post', scheme)
