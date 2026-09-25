import "../styles/header.css"
import { Link } from "react-router"

function Header() {

  return (
    <header>
      <Link to="/" className="logo">Filmly</Link>
      <nav>
        <Link className="nav-link">Dashboard</Link>
        <Link className="nav-link">Saved</Link>
      </nav>
      <div className="search-bar-wrapper">
        <input className="search-bar" type="text" />
        <button className="search-button">Search</button>
      </div>
    </header>
  )
}

export default Header
