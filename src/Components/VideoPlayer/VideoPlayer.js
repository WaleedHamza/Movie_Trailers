import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css';

function VideoPlayer(props) {
    let trailer = props.trailers
    var videos = []
    trailer.forEach((item, index) => {
        var URL = `https://www.youtube.com/watch?v=${item.key}&enablejsapi=1`
        const trailer = <div className='player-wrapper '>
            <ReactPlayer
                className='react-player'
                url={URL}
                controls
                key={index}
                id={item.id}
                width='100%'
                height='100%'/>
        </div>
        videos.push(trailer);
    })

    return <> {videos[0]} </> 
}

export default VideoPlayer;