import { POSTER_PATH } from '../globals'

const MovieList = ({movies}) => {
    // console.log(movies)

    const moviesArray = Object.values(movies)

    // if (!Array.isArray(movies) || movies.length === 0) {
    //     return <h3>Loading please wait</h3>
    // } else {

        return (
            <div className="grid">
                {
                    moviesArray.map((movie) => {
                        console.log(movie)
                        // console.log(movie.Year)
                        return (
                        <div className='card' key={movie.id}>
                            <img src={movie.Poster} alt='poster' />
                            <h3>{movie.Title}</h3>
                            <button>View Movie</button>
                        </div>
                    )
            })}
        </div>
    )
}



// }

export default MovieList