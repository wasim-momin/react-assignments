import axios from "axios";

export const api =axios.create({
    baseURL:"https://api.freeapi.app/api/v1",
    headers:{
        "content-Type":"application/json"
    }
})