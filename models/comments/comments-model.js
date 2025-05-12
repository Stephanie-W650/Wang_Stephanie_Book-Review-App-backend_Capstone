import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
    
    content: { type: String, required: true },
    username: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 0}
},
    {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentsSchema)



export default Comment;