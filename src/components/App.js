
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Comments from './Comments';

class App extends React.Component {
    
    state = { videos: [], selectedVideo: null, noOfComments: 3, noOfVideos: 2 };

    totalNoOfComments = Math.floor(Math.random()*15 + 3)

    componentDidMount() {
        this.onTermSubmit('dublin');
    }
    onTermSubmit = async term => {   
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        console.log(response);
        

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
         });
    };
   
    onVideoSelect = (video) => { 
        this.setState({ selectedVideo: video });
    }

    onCommentsClick = () => {
        this.setState({ noOfComments : this.totalNoOfComments })
    }

    onButtonClick = () => {
        this.setState({ noOfVideos : this.state.noOfVideos + 2 })
    }


    render() {
        return (
        <div className="container" id="body">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            
            <div className="row">
                <div className="col-12 col-md-8">
                   <VideoDetail video={this.state.selectedVideo} />
                   <Comments onCommentsClick={this.onCommentsClick} totalNoOfComments={this.totalNoOfComments} 
                   noOfComments={this.state.noOfComments}/> 
                </div>
                <div className="col-12 col-md-4">
                    <VideoList onVideoSelect={this.onVideoSelect} onButtonClick={this.onButtonClick} 
                    videos={this.state.videos}  noOfVideos={this.state.noOfVideos}/>
                </div>
            </div>                      
        </div>
        );
    }
}

export default App;
