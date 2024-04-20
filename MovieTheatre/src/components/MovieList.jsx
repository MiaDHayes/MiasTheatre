import { POSTER_PATH } from '../globals'

const MovieList = ({movies}) => {
    console.log(movies)

    const moviesArray = Object.values(movies)

    // if (!Array.isArray(movies) || movies.length === 0) {
    //     return <h3>Loading please wait</h3>
    // } else {

        return (
            <div className="grid">
                {
                    moviesArray.map((movies) => {
                        console.log(movies)
                        // console.log(movie.Year)
                        return (
                        <div className='card' key={movies.id}>
                            <img src={movies.Poster} alt='poster' />
                            <h3>{movies.Title}</h3>
                            <button>View Movie</button>
                        </div>
                    )
            })}
        </div>
    )
}



// }

export default MovieList