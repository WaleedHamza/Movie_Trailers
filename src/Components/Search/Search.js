import React, { Component } from 'react'
import axios from 'axios';
import { Jumbotron, InputGroup, FormControl } from 'react-bootstrap';
import MovieCard from'../Card/MovieCard'
import './search.css'
 class Search extends Component {

  constructor(){
    super();
    this.state = {
      movies:[],
      titleInput: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
  e.stopPropagation();
  e.preventDefault();
  e.nativeEvent.stopImmediatePropagation();
    const input = e.target.value
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    this.setState({titleInput: input})
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
      axios.get(TMDB)
      .then( (res) => {
       var movieItems=[]
        var results = res.data.results
        results.forEach((movie) => {
          movie.poster='https://image.tmdb.org/t/p/original' + movie.poster_path
          movie.backdrop='https://image.tmdb.org/t/p/original' + movie.backdrop_path
          const film= <MovieCard movie= {movie} key={movie.id}/>
            movieItems.push(film)
          })
          this.setState({movies: movieItems})
          })
      .catch((err) => {
              console.log(err)
          }) 
  }

  render() {
    return (
      <div>
<Jumbotron bsPrefix='jumbotron'>
  <h1 className='title'>Welcome to the MovieDB</h1>
  <h3 className='intoduction'>
    Search the MovieDB for your favorite movies, find out more information and watch trailers
  </h3>
  <InputGroup className="mb-3">
    <FormControl bsPrefix='searchInput'
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      className='searchInput' type='text' name="searchMovie" value={this.state.titleInput} onChange={this.onChange} onClick={(e)=>{e.preventDefault()}} placeholder=" Search..."
    />
  </InputGroup>
</Jumbotron>
       {this.state.movies}
      </div>
    );
  }
}


export default Search;