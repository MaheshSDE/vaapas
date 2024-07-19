import './index.css'

const Language = props => {
  const {language} = props
  return (
    <div className="languageContainer">
      <p className="language">Language: {language}</p>
    </div>
  )
}
export default Language
