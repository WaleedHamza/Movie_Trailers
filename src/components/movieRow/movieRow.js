import React from 'react';
import './movieRow.css';

class MovieRow extends React.Component {

    viewMovie(){
        console.log(this.props.movie.homepage)
        const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id
        window.location.href = url
    }
    render() {
        return <div>
            <div>
                <div className="row"  key={this.props.movie.id}>
                    
                        <img className="poster" alt="poster" src={this.props.movie.posterSrc} 
                        onError={(e)=>{e.target.onerror = null; e.target.src="https://uae.microless.com/cdn/no_image.jpg"}}/>
                
                    <div className="details">
                        <h2>{this.props.movie.title}</h2>
                        <p>RELEASE DATE: {this.props.movie.release_date}</p>
                        <p>SYNOPSIS: {this.props.movie.overview} </p>
                        <button onClick={this.viewMovie.bind(this)}>View</button>
                    </div>
                    
                </div>
            </div>

        </div>
    }
}

export default MovieRow;