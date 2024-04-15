import { POSTER_PATH } from '../globals'

const MovieList = (props) => {
    console.log(props.movies)

    if (!props.movies) {
        return <h3>Loading please wait</h3>
    } else {

        return (
        <div className="grid">
            {
                props.movies.map((movie) => (
                    <div className='card' key={movie.id}>
                        <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt='poster' />
                        <h3>{movie.title}</h3>
                        <button>View Movie</button>
                    </div>
                ))
            }

        </div>
    )
}


}

export default MovieList