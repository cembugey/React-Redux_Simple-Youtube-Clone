
import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="card border-dark rounded bg-transparent" style={{maxHeight: '130px', textOverflow: 'ellipsis'}}>
            <div className="row no-gutters">
                <div className="col-md-6" style = {{ cursor: 'pointer' }}>
                    <img alt={video.snippet.title} className="my-images img-fluid" src={video.snippet.thumbnails.medium.url} />
                </div>
                <div className="col-md-6">
                    <div className="card-body overflow-hidden" style={{textOverflow: 'ellipsis'}}>
                        <h5 className="video-item card-title card-text text-body" style={{textOverflow: 'ellipsis', cursor: 'pointer' }}>{video.snippet.title.substring(0,50)}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;