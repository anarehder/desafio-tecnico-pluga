import axios from 'axios';

export async function getPlugaData() {
    const url = `https://pluga.co/ferramentas_search.json`;
    const response = await axios.get(url);
    return response.data;
}