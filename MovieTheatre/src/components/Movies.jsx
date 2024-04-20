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
                const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=94195ae8`)
                console.log(response.data)
                setMovies(response.data || [])
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