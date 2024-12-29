import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    id: { type: String, required: true, unique:true },
    title:{ type: String, required: true },
    description:{ type: String, required: true},
    gender:{ type: String, required: true},
    image:{ type: String, required: true },
    publishDate:{ type: Date, default: new Date },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }]
})

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;