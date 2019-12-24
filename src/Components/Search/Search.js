import React, { Component } from 'react'
import axios from 'axios';
import ReactPlayer from 'react-player'
import { Jumbotron, InputGroup, FormControl } from 'react-bootstrap';
import { Modal, Button, Icon, Spin } from 'antd';
import MovieCard from'../Card/MovieCard'
import './search.css'
import 'antd/dist/antd.css';

 class Search extends Component {

  constructor(){
    super();
    this.state = {
      loading: false,
      noData: false,
      movies:[],
      titleInput: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    const LATEST =  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
       axios.get(LATEST)
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
        });
}


handleOk = e => {
  this.setState({ modal: { visible: false } });
};

handleCancel = e => {
  this.setState({ modal: { visible: false} });
};

  onChange(e) {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const input = e.target.value;
    this.setState({titleInput: input});
    const LATEST =  `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`;
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`;

      if(input === ""){
        axios.get(LATEST)
        .then((res)=> {
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
      }else{
      axios.get(TMDB)
      .then( (res) => {
        if( res.data.results >= 0){
          this.setState({loading:false})
          console.log('Looks like there was a problem. Status Code: ' +
          res.status);
          this.setState({noData: true})
        return;
        }
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
          });
}
  }

  render() {
    let content = this.state.loading ? <div className="loadingContainer"><Spin size="large" className="spinner" /></div> : this.state.movies;
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
<div>
  {content}
</div>
       
      </div>
    );
  }
}


export default Search;