import axios from 'axios';
import { key } from '../config.js'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.results = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            console.log(error);
            alert('A problem occured during the processing of a recipe!');
        }
    } 
}

