import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
    },
    role:{
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    },
});

const User = mongoose.model('User', userSchema);

export default User;