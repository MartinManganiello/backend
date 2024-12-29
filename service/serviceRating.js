import Rating from "../model/modelRating.js";
import Movie from "../model/modelMovie.js";

export const updateMovie = async (id, rating_id) => {
    const movie = await Movie.findByIdAndUpdate(
        id,
        {
          $addToSet: { ratings: rating_id },
        },
        { new: true }
      );
    return movie
}

export const getRatings = async (userId) => {
    const ratings = await Rating.find({ user: userId }).populate("movie");
    return ratings
}

export const getRating = async (movieId, userId) => {
    const rating = await Rating.findOne({ movie: movieId, user: userId });
    return rating
}

export const createRating = async (movieId, userId, stars) => {
    const rating = await Rating.create({ id: crypto.randomUUID(), stars, movie: movieId, user: userId });
    return rating
}

export const updateRating = async (id, movieId, userId, stars) => {
    const rating = await Rating.findOneAndUpdate({ id: id }, { stars, movie: movieId, user: userId });
    return rating
}

export const deleteRating = async (id) => {
    const rating = await Rating.deleteOne({ id: id });
    return rating
}