import axios from "axios";

const instance = axios.create(
    {
        baseURL: "https://cute-rose-cockatoo-wear.cyclic.app/"
    }
)

export default instance;