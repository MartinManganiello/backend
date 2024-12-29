import { getRating, getRatings,updateMovie, updateRating, createRating, deleteRating } from "../service/serviceRating.js";


export const getRatingsController = async (req, res) => {
  try {
    const user = req.params.id;
    const ratings = await getRatings( user);
    if (ratings.length === 0) {
      return res.status(400).json({ status: "error", message: "Ratings no encontrados", data: {} });
    }
    return res.status(200).json({ status: "success", message: "Ratings obtenidas", data: ratings });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error, data: error });
  }
}

export const createOrUpdateRatingController = async (req, res) => {
  try {
    const { movie, user, stars } = req.body;
    let rating = await getRating(movie, user);
    if (rating) {
      rating = await updateRating(rating.id, movie, user, stars);
    } else {
      rating = await createRating(movie, user, stars);
    }
    let updated_movie = await updateMovie(movie, rating._id);
    console.log("Movie updated: " + updated_movie)
    return res.status(200).json({ status: "success", message: "Rating establecido", data: rating });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message, data: {} });
  }
}

export const deleteRatingController = async (req, res) => {
  try {
    const id = req.params.id;
    let ratingEliminado = await deleteRating(id);
    if (ratingEliminado) {
      ratingEliminado = await getRating(id);
      return res.status(200).json({ status: "success", message: "Rating eliminada", data: ratingEliminado });
    } else {
      return res.status(400).json({ status: "error", message: "Rating no eliminada", data: {} });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message, data: {} });
  }
}