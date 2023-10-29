import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: { 
        type: String,
        required: true,
     }
})

const Music = mongoose.model('Music', MusicSchema);

export default Music;