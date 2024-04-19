import { POSTER_PATH } from '../globals'

const MovieList = (props) => {
    console.log(props.movies)

    if (!Array.isArray(props.movies) || props.movies.length === 0) {
        return <h3>Loading please wait</h3>
    } else {

        return (
        <div className="grid">
            {
                props.movies && props.movies.map((movie) => (
                    <div className='card' key={movie.id}>
                        <img src={movie.Poster} alt='poster' />
                        <h3>{movie.Year}</h3>
                        <button>View Movie</button>
                    </div>
                ))
            }

        </div>
    )
}


}

export default MovieList