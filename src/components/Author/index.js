import './index.css'

const Author = props => {
  const {authorName} = props
  return <p className="author">Movie: {authorName}</p>
}
export default Author
