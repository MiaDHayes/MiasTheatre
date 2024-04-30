import './App.css'
import MovieList from './components/MovieList'
import { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([
    {
        "Title": "Grease",
        "Year": "1978",
        "imdbID": "tt0077631",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        "Title": "Coraline",
        "Year": "2009",
        "imdbID": "tt0327597",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_SX300.jpg"
      },
      {
        "Title": "Mary and Max",
        "Year": "2009",
        "imdbID": "tt0978762",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDgzYjQwMDMtNGUzYi00MTRmLWIyMGMtNjE1OGZkNzY2YWIzL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        "Title": "Dave Made a Maze",
        "Year": "2017",
        "imdbID": "tt4457344",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWYwOTgyYzQtYjdjZC00ZGE4LWExM2ItZTczZGEzMDY4OTU0XkEyXkFqcGdeQXVyMTY2NTQ3ODc@._V1_SX300.jpg"
      },
      {
        "Title": "Late Night with the Devil",
        "Year": "2024",
        "imdbID": "tt14966898",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDkyNjE0NzMtNTgxYS00MDE4LWI0OWYtZGNmNDcxNjRhMTY3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Christine",
        "Year": "1983",
        "imdbID": "tt0085333",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZThhNDQxNzAtOTYzZC00MzZkLWI2YjItOTE2ZjliZDY3NTFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "Sorry to Bother You",
        "Year": "2018",
        "imdbID": "tt5688932",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwMmI4YzUtZGI2Mi00M2MwLWIyMmMtZWYzMWZmNzAyNmYwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      },
      {
        "Title": "Howl's Moving Castle",
        "Year": "2005",
        "imdbID": "tt0347149",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      },
      {
        "Title": "Shallow Hal",
        "Year": "2001",
        "imdbID": "tt0256380",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwMzY2NDE0NF5BMl5BanBnXkFtZTYwNjg2Njc2._V1_SX300.jpg"
      },
      

])

return (
    <div>
        <MovieList movies={movies} />
    </div>
)
}

export default App
