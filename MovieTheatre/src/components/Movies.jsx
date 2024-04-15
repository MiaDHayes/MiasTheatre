import { useEffect, useState } from "react"
import MovieList from "./MovieList"
import axios from 'axios'
import { BASE_URL } from "../globals"


function Movies() {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            console.log(response)
            setMovies(response.data.results)
        }
        
        getMovies()
    }, [])
    console.log(movies)

    return (
        <div>
            <MovieList movies={movies} />
        </div>
    )
}


export default Movies