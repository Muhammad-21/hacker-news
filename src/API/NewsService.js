import axios from "axios";
const path = 'https://hacker-news.firebaseio.com/v0/';
export default class NewsService {
    static async getNewsID(){
        const response = await axios.get(`${path}/newstories.json`);
        return response.data;
    }
    
    static async getNews(newsId){
        const response = await axios.get(`${path}/item/${newsId}.json`);
        return response.data;
    }

}