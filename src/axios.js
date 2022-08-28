import axios from "axios";

const instance =axios.create(
    {
        baseURL:"https://quiet-stream-47270.herokuapp.com/"
    }
)

export default instance;