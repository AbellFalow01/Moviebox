import "../styles/movieCard.css"
import { Link } from "react-router"

function MovieCard(movie) {

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <div className="rating-card">
        <span className="star-symbol">✦</span>
        <p className="rating">{movie.vote_average.toFixed(1)}</p>
      </div>
    </Link>
  )
}

export default MovieCard
