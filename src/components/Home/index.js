import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <h1 className="homeHeading">Discover a world of endless entertainment</h1>
    <p className="homePara">
      Entertainment Unlimited: Explore Our Movie Platform Today!{' '}
    </p>
    <Link to="/movies">
      <button type="button" className="button">
        Find Movie
      </button>
    </Link>
  </div>
)
export default Home
