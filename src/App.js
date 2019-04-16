import React, { Component } from 'react';
import Header from './components/header/header.js'
import SearchForm from "./components/searchForm/searchForm.js"
import MovieRow from './components/movieRow/movieRow.js'
// import axios from 'axios'
import './App.css';
import $ from "jquery"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}

      this.search()
    }


            search(searchTerm) {
                // console.log('inside the search function ')
                const url = `https://api.themoviedb.org/3/search/movie?api_key=615416944a44ce93ed4100b890e43b0a&language=en-US&query=${searchTerm}&page=1&include_adult=false`
                $.ajax( {
                    url:url,
                success : (response) => {
                    const result = response.results
                    // console.log('we gor the results' , result[0])

                    var movieRows =[]

                    result.forEach((movie) => {
                        // console.log(movie.title);
                        movie.posterSrc = 'https://image.tmdb.org/t/p/w185/'+ movie.poster_path;
                        movie.backdrop = 'https://image.tmdb.org/t/p/w185/'+ movie.backdrop_path;
                        const film = <MovieRow movie={movie}/>
                        movieRows.push(film)
                    })

                    this.setState({rows: movieRows})
                },
            error: (err) => {
                console.log(err)
            }})
            }

    render(){
        return(
            <div className = 'App'>
            <Header/>
            {/* <SearchBar/> */}
            <input onChange = {this.inputHandler.bind(this)}></input>
            {this.state.rows}

</div>
        )
         
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=615416944a44ce93ed4100b890e43b0a&language=en-US&query=hulk&page=1&include_adult=false`) 
        .then (
            res => res.json()
        ) 
        .then(
            json => { 
                this.setState(
                    [{ isLoaded: true, movies: json }]); })
    }
    inputHandler(e) {
        e.preventDefault();
        console.log(e.target.value);
        const searchInput = e.target.value;
        this.search(searchInput)
      }
} 

export default App;
