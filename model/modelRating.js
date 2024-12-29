import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
        id: { type: String, required: true },
        stars: { type: Number, required: true, min: 1, max: 5 },
        movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    });

ratingSchema.index({ user: 1, movie: 1 }, { unique: true });
const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;