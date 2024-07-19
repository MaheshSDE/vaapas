import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="headerContainer">
    <img
      src="https://img.freepik.com/premium-vector/vintage-head-cow-with-movie-logo-design-vector-graphic-symbol-icon-illustration-creative-idea_15473-11885.jpg?w=740"
      alt="headerLogo"
      className="logo"
    />
    <ul className="headerListContainer">
      <Link to="/" className="nav-item">
        <li className="headerPara">Home</li>
      </Link>
      <Link to="/movies" className="nav-item">
        <li className="headerPara">Movies</li>
      </Link>
    </ul>
  </nav>
)
export default Header
