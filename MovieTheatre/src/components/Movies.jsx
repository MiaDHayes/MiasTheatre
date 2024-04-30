import { useEffect, useState } from "react"
import MovieList from "./MovieList"
import axios from 'axios'
import { BASE_URL } from "../globals"


function Movies() {
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?apikey=9648e54&`)
                console.log(response.data.Search)
                setMovies(response.data.Search || [])
        } catch (error) {
            console.error("Error fetching movies:", error)
        }
    }
        
        getMovies()
    }, [])
    // console.log(movies)

    return (
        <div>
            <MovieList movies={movies} />
        </div>
    )
}


export default Movies