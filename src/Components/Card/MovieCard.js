import React, {Component} from 'react'
import axios from 'axios';
import {Card, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {Modal} from 'antd';
import './MovieCard.css'
import VideoPlayer from '../VideoPlayer/VideoPlayer';

export default class MovieCard extends Component {

    constructor() {
        super();
        this.state = {
            trailers: [],
            visible: false
        }
        this.populateModal = this
            .populateModal
            .bind(this);
        this.toggleModal = this
            .toggleModal
            .bind(this);
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
                console.log(results)
                var clips = []
                results.forEach((item) => {
                    clips.push(item);
                });
                this.setState({trailers: clips})
            })
        this.setState({visible: true});
    };

    toggleModal = () => {
        this.setState({
            visible: !this.state.visible,
            trailers: []
        });
    }

    render() {
        var movie = this.props.movie
        return (
            <div className="cardsConainer">
                <Card key={movie.id} bsPrefix='card'>
                    <Card.Header bsPrefix='cardHeader'>
                        <h3>{movie.title}</h3>
                        <h4 className="text-muted">Released: {movie.release_date}</h4>
                    </Card.Header>
                    <Card.Body className='cardBody'>
                        <div className='cardOverlay'>
                            <div className='actionBtn'>
                                <OverlayTrigger
                                    overlay={< Tooltip id = "tooltip-disabled" > <h3>Watch Trailer</h3> </Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button
                                            variant="link"
                                            onClick={() => {
                                            this.populateModal(movie.id)
                                        }}>
                                            <span className='glyphicon glyphicon-play-circle'></span>
                                        </Button>
                                    </span>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    overlay={< Tooltip id = "tooltip-disabled" > <h3>Visit Homepage</h3> </Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button
                                            variant="link"
                                            onClick={this
                                            .visitHomePage
                                            .bind(this)}>
                                            <span className="glyphicon glyphicon-info-sign"></span>
                                        </Button>
                                    </span>
                                </OverlayTrigger>
                            </div>
                            <Card.Text bsPrefix='cardText'>
                                {movie.overview}
                            </Card.Text>
                        </div>
                        <Card.Img
                            className='cardImage'
                            variant="top"
                            src={movie.poster}
                            alt='movie_backdrop'
                            onError=
                            {(e)=>{e.target.onerror = null ; e.target.src="http://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"}}/>
                    </Card.Body>
                    <Card.Footer bsPrefix='cardFooter'></Card.Footer>
                </Card>
                <Modal
                    footer={null}
                    closable={false}
                    destroyOnClose={true}
                    width='70vw'
                    visible={this.state.visible}
                    onOk={this.toggleModal}
                    onCancel={this.toggleModal}
                    toggleModal={this.toggleModal}>
                    <VideoPlayer trailers={this.state.trailers}/>
                </Modal>
            </div>
        )
    }
}
