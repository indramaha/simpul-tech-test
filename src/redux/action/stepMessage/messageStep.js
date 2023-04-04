import axios from "axios"

export const handleGetCommnetbyPost = () => (dispacth) => {
    const id = localStorage.getItem("idPost")
    const config = {
        headers: {
            "app-id" : "6426a4a0ac172ad8a49ae978",
        },
    }

    axios
        .get(`https://dummyapi.io/data/v1/post/${id}/comment`, config)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}