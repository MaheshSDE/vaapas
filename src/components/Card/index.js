import Author from '../Author'
import Language from '../Language'
import PublishYear from '../PublishYear'

import './index.css'

const Card = props => {
  const {movieDetails, image} = props
  const {authorName, language, publishYear} = movieDetails

  return (
    <li className="listCard">
      <img src={image} alt="randomIamge" className="random-image" />
      <div className="ALPContainer">
        <Author authorName={authorName} />
        <Language language={language} />
        <PublishYear publishYear={publishYear} />
      </div>
    </li>
  )
}

export default Card
