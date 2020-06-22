import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect, onButtonClick, noOfVideos }) => {

    let renderedList

         renderedList = videos.slice(0, noOfVideos).map((video) => {
             return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
         });


    return (
        <div>
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
            <div className="mx-auto" style={{ width : '100px' }}>
                <button onClick={onButtonClick} style={{ background:'none', border:'none' }}>More Videos</button>
            </div>
        </div>
    );
};

export default VideoList;
