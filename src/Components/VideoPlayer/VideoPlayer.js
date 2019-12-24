import React from 'react'
import ReactPlayer from 'react-player'
 
function VideoPlayer (props) {
    let t = props.trailers
    console.log('======',t);
    var videos= []
    t.forEach( (item, index ) => {
        console.log('-----------------inside for each video player ', item);
        var URL = `https://www.youtube.com/watch?v=${item.key}`
        const trailer = <ReactPlayer url={URL} controls key={index} width='100%' height="70vh"/>
        videos.push(trailer);
    })


return  <>{videos}</>
  
}

export default VideoPlayer;

