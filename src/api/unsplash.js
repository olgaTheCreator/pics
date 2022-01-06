import axios from '/home/ojb/node_modules/axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Hl1X-tl0-uY0QGN1yq0WKkBSzrJrT3OhqgLOvqbvibc'
    }
});