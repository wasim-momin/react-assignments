import axios from "axios";

export const api =axios.create({
    baseURL:"/api",
    headers:{
        "content-Type":"application/json"
    },
    withCredentials: true, 
})