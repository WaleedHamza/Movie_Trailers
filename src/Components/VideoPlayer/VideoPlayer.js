import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer(props) {
    let t = props.trailers
    var videos = []
    t.forEach((item, index) => {
        var URL = `https://www.youtube.com/watch?v=${item.key}&enablejsapi=1`
        const trailer = <ReactPlayer url={URL} controls key={index} id={item.id} width='100%' height='500px'/>
        videos.push(trailer);
    })

    return  <>{videos[0]}</> 
  
}

export default VideoPlayer;