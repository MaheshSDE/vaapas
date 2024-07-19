import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {MdSearch} from 'react-icons/md'
import Card from '../Card'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Movies extends Component {
  state = {
    data: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    image: '',
  }

  componentDidMount() {
    this.getImages()
    this.getMovieDetails()
  }

  getImages = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({image: data.message})
    }
  }

  getMovieDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://openlibrary.org/search.json?q=${searchInput}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.docs.map(eachItem => ({
        authorKey: eachItem.author_key,
        authorName: eachItem.author_name,
        language: eachItem.language,
        publishYear: eachItem.publish_year,
      }))
      this.setState({data: updatedData, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickSearchButton = () => {
    this.getImages()
    this.getMovieDetails()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSuccessView = () => {
    const {data, image} = this.state

    return (
      <div className="successViewContainer">
        <ul className="successCardContainer">
          {data.map(eachItem => (
            <Card
              movieDetails={eachItem}
              key={eachItem.authorKey}
              image={image}
            />
          ))}
        </ul>
      </div>
    )
  }

  onclickErrorButton = () => {
    this.getMovieDetails()
  }

  getFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1 className="failure-view-heading">Oop! Something Went Wrong</h1>
      <p className="failure-view-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="retry-btn"
        type="button"
        onClick={this.onclickErrorButton}
      >
        Retry
      </button>
    </div>
  )

  getLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" height="50" width="50" color="#ffffff" />
    </div>
  )

  getDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.getSuccessView()
      case apiStatusConstants.failure:
        return this.getFailureView()
      case apiStatusConstants.inProgress:
        return this.getLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="moviesContainer">
        <div className="inputContainer">
          <input
            type="search"
            className="searchInputStyle"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <button
            type="button"
            className="iconButton"
            onClick={this.onClickSearchButton}
          >
            .<MdSearch className="icon-style" />
          </button>
        </div>
        <div className="searchImageContainer">
          {searchInput === '' ? (
            <img
              src="https://img.freepik.com/free-vector/search-concept-landing-page_52683-19516.jpg?t=st=1721375737~exp=1721379337~hmac=14c7120e2b7bb5fb4a1439a05262c16984bab71d204017dd920095d16e4f6d6a&w=740"
              alt="searchImage"
              className="search-image"
            />
          ) : (
            this.getDetails()
          )}
        </div>
      </div>
    )
  }
}
export default Movies
