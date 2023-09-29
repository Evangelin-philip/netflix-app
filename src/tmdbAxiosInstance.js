import axios from "axios"

const tmdbAxiosInstance=axios.create({

    // from api.txt
    baseURL:"https://api.themoviedb.org/3"
})
export default tmdbAxiosInstance