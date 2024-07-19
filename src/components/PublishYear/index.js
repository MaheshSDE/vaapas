import './index.css'

const PublishYear = props => {
  const {publishYear} = props
  return (
    <div className="publishContainer">
      <p className="publish">Release: {publishYear}</p>
    </div>
  )
}
export default PublishYear
