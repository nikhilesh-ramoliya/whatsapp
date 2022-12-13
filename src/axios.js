import axios from "axios";

const instance = axios.create(
    {
        baseURL: "http://54.238.247.232/"
    }
)

export default instance;