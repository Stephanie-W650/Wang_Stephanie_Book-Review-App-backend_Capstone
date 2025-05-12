import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, required: true},
    username: { type: String, required: true },
    email: {type: String, unique: true, required: true}
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
