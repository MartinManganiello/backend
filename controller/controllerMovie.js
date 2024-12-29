
import { getMovies, getFilterMovies,getMovie, createMovie, updateMovie, deleteMovie, getMoviePopulado } from "../service/serviceMovie.js";

export const getMoviesController = async (req, res) => {
    try {
        const movies = await getMovies();
        if(movies.length === 0){ 
            return res.status(400).json({status: "error", message: "Peliculas no encontradas", data:{}});
        }
        return res.status(200).json({status: "success", message: "Peliculas obtenidas", data:movies});
    } catch (error) {
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}

export const getMoviesFilterController = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        const movies = await getFilterMovies(page, limit);
        if(movies.length === 0){ 
            return res.status(400).json({status: "error", message: "Peliculas no encontradas", data:{}});
        }
        return res.status(200).json({status: "success", message: "Peliculas obtenidas", data:movies});
    } catch (error) {
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}
export const getMovieController = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await getMovie(id);
        if(!movie){
            return res.status(400).json({status: "error", message: "Pelicula no encontrada", data:{}});
        }
        return res.status(200).json({status: "success", message: "Pelicula obtenida", data:movie});
    } catch (error) {
        return res.status(500).json({status: "error", message: "error en el servidor", data:{}});
    }
}

export const createMovieController = async(req, res) => {
    try {
        const {title,description,gender,image,publishDate} = req.body;
        console.log('Request body:', req.body);
        if (!title || !description || !gender || !image || !publishDate) {
            return res.status(400).json({status: "error", message: "Faltan datos", data:{}});
        }  
        const newMovie = await createMovie(title,description,gender,image,publishDate);
        
        if(newMovie){
            return res.status(201).json({status: "success", message: "Pelicula creada", data:newMovie});
        }else{
            return res.status(400).json({status: "error", message: "Pelicula no creada", data:{}});
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}
export const updateMovieController = async (req, res) => {
    try {
        const id = req.params.id;
        const {title,description,gender,image,publishDate} = req.body;

        if (!title && !description && !gender && !image && !publishDate) {
            return res.status(400).json({status: "error", message: "faltan datos", data:{}});
        }

        let movieActualizado = await updateMovie(id,title,description,gender,image,publishDate);

        if (movieActualizado) {
            movieActualizado = await getMovie(id);
            return res.status(200).json({status: "success", message: "Pelicula actualizada", data:movieActualizado});
        } else {
            return res.status(400).json({status: "error", message: "Pelicula no actualizada", data:{}});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}
export const deleteMovieController = async (req, res) => {
    try {
        const id = req.params.id;
        let movieEliminado = await deleteMovie(id);
        if (movieEliminado) {
            movieEliminado = await getMovie(id);
            return res.status(200).json({status: "success", message: "Pelicula eliminada", data:movieEliminado});
        }else{
            return res.status(400).json({status: "error", message: "Pelicula no eliminada", data:{}});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status: "error", message: error.message, data:{}});
    }
}

export const getMoviePopuladoController = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await getMoviePopulado(movieId);
        if(!movie){
            return res.status(400).json({status: "error", message: "Pelicula no encontrada", data:{}});
        }
        return res.status(200).json({status: "success", message: "Pelicula obtenida", data:movie});
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "error", message: "Error en el servidor", data:{}});
    }
}