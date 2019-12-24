import React, {Component} from 'react'
import axios from 'axios';
import {Card, Figure, Button} from 'react-bootstrap';
import { Modal, Empty } from 'antd';
import './MovieCard.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer';


export default class MovieCard extends Component {

    constructor(){
        super();
            this.state = {
                trailers : [],
                visible: false,
                // keys:[],
            }
            this.populateModal= this.populateModal.bind(this);
            this.toggleModal= this.toggleModal.bind(this);
    }
    visitHomePage() {
        const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id
        window.location.href = url
    }

    populateModal = (id) => {
    let URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`;
    axios
        .get(URL)
        .then((res) => {
            var results = res.data.videos.results
            var clips = []
            results.forEach((item) => {
                clips.push(item);
            });
            this.setState({trailers: clips})
            console.log('this is the trailers state', this.state.trailers);
        })
    this.setState({visible: true});
};

      toggleModal =()=> {
          this.setState({visible: !this.state.visible, trailers: [] });
      }
    

    render() {
        var movie = this.props.movie
        return (
            <div className='container' key={movie.id}>
                <Card bsPrefix='card'>
                    <div className='card-img'>
                        <Card.Img
                            bsPrefix='card-img'
                            variant="top"
                            src={movie.backdrop}
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
                            src={movie.poster}
                            onClick={(e)=>{e.preventDefault(); 
                                console.log(movie.id)
                                this.getTrailer(movie.id)}}
                            onError=
                            {(e)=>{e.target.onerror = null ; e.target.src="404.svg"}}/>
                    </Figure>
                    <Card.Body className='movie_details' key={movie.id}>
                        <Card.Title><h1>{movie.title}</h1></Card.Title>
                        <Card.Text>{movie.overview}</Card.Text>
                    </Card.Body>
                    <Card.Footer bsPrefix='card-footer'>
                        <small className="text-muted">Release Date: {movie.release_date}</small>
                        <Button
                            variant="link"
                            onClick={()=>{this.populateModal(movie.id)}}>Watch Trailer</Button>
                            
                            {/* <Button
                            variant="link"
                            onClick={this
                            .visitHomePage
                            .bind(this)}>More Info</Button> */}
                    </Card.Footer>
                </Card>
                <Modal
                width='70vw'
          visible={this.state.visible}
          onOk={this.toggleModal}
          onCancel={this.toggleModal}
          toggleModal={this.toggleModal}
          >
        <VideoPlayer trailers = {this.state.trailers}/>
                </Modal>
            </div>
        )
    }
}
