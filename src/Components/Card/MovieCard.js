import React, {Component} from 'react'
import axios from 'axios'
import {Card, Figure, Button} from 'react-bootstrap';
import './MovieCard.css'

export default class MovieCard extends Component {

    visitHomePage() {
        console.log(this.props.movie.homepage)
        const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id
        window.location.href = url
    }
    getTrailer() {
        console.log('clicked')
        const url = `https://api.themoviedb.org/3/movie/${this.props.movie.id}?api_key=615416944a44ce93ed4100b890e43b0a&append_to_response=videos`;
        axios
            .get(url)
            .then((res) => {
                var results = res.data.videos.results
                results.forEach((item) => {
                    console.log(item.key)
                })
            })
    }
    render() {
        return (
            <div className='container' key={this.props.movie.id}>
                <Card
                    bsPrefix='card'
                    onClick={this
                    .visitHomePage
                    .bind(this)}>
                    <div className='card-img'>
                        <Card.Img
                            bsPrefix='card-img'
                            variant="top"
                            src={this.props.movie.backdrop}
                            alt='movie_backdrop'
                            onError=
                            {(e)=>{e.target.onerror = null ; e.target.src="https://i.stack.imgur.com/GNhxO.png"}}/>
                    </div>
                    <Figure bsPrefix='poster'>
                        <Figure.Image
                            bsPrefix='figure-img'
                            width={171}
                            height={240}
                            alt="171x180"
                            src={this.props.movie.poster}
                            onError=
                            {(e)=>{e.target.onerror = null ; e.target.src="404.svg"}}/>
                    </Figure>
                    <Card.Body className='movie_details' key={this.props.movie.id}>
                        <Card.Title><h1>{this.props.movie.title}</h1></Card.Title>
                        <Card.Text>{this.props.movie.overview}</Card.Text>
                    </Card.Body>
                    <Card.Footer bsPrefix='card-footer'>
                        <small className="text-muted">Release Date: {this.props.movie.release_date}</small>
                        <Button
                            variant="link"
                            onClick={this
                            .visitHomePage
                            .bind(this)}>More Info</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
