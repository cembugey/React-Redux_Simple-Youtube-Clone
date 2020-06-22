//https://developers.google.com/youtube/v3/docs/search/list

import axios from 'axios';

const KEY = 'AIzaSyCqRdkUQwIt923n7ogqBbbRWkNQTbMe7Zo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    //all the different query string parameters that we want to have added on to request
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});

//we'll be able to get our instance of axios and we're going to create an pre-configured 
//instance of Axios just as we had previously, we will be able to say sth like youtube.get('/search')