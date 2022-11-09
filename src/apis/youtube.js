import axios from 'axios';

const KEY = 'AIzaSyBeC51vXkAXCEu09atWI_9qwO3Ypo1nqj0';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});