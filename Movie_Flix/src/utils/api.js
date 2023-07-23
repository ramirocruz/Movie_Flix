import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzNmYWI5ODU4NjVlZmIwMjk0ODU2NzQxNWRkOGM0MiIsInN1YiI6IjY0YjE3M2NkMjUzZmFiMGMzODA5MmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKgH1s1sQbnsARi6IvxtXDET4joJAhhACPjojXomD04";
console.log(TMDB_TOKEN_KEY);

const headers = {
    Authorization: "bearer " + TMDB_TOKEN_KEY,
};

export const fetchDataFromTMDB = async (url,params) => {
    try{
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    }
    catch(err){
        console.error(err);
        return err;
    }
}
