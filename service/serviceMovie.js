import Movie from "../model/modelMovie.js"

export const getMovies= async () => {
    const movies = await Movie.find()
    return movies;
};

export const getFilterMovies= async (page, limit) => {
    const skip = (page - 1) * limit;
    const movies = await Movie.find().skip(skip).limit(limit)
    const movies_amount = await Movie.find().countDocuments();
    const response = {
        movies: movies,
        movies_amount: movies_amount,
        pages_amount: Math.ceil(movies_amount / limit),
        actual_page: page
    }
    return response;
};

export const getMovie = async (id) => {
    const movie = await Movie.findOne({id:id});
    return movie
}

export const createMovie = async (title,description,gender,image,publishDate) => {
    const movie = await Movie.create({id:crypto.randomUUID(),title,description,gender,image,publishDate});
    return movie
}
export const updateMovie = async (id,title,description,gender,image,publishDate) => {
    const movie = await Movie.findOneAndUpdate({id:id},{title,description,gender,image,publishDate})
    return movie
}
export const deleteMovie = async (id) => {
    const movie = await Movie.deleteOne({id:id});
    return movie
}

export const getMoviePopulado = async (id) => {
    const movie = await Movie.findOne({id:id}).populate("ratings");
    return movie
}