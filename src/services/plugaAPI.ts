import axios from 'axios';
import { Tool } from '../types';

export async function getPlugaData(): Promise<Tool[]> {
    const url = `https://pluga.co/ferramentas_search.json`;
    const response = await axios.get(url);
    return response.data;
}