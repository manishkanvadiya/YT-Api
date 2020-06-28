import axios from 'axios';

const KEY = 'AIzaSyBy6EvsRDECAddpYrNprVFktJNETo_xCJc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})