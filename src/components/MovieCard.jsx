import "../styles/movieCard.css"
import { Link } from "react-router"

function MovieCard() {

  return (
    <Link to={"/"} className="movie-card">
      <img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" alt="" />
      <div className="rating-card">
        <span className="star-symbol">✦</span>
        <p className="rating">5.7</p>
      </div>
    </Link>
  )
}

export default MovieCard
