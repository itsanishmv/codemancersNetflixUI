import axios from "axios";

const BaseUrl = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})
export default BaseUrl