import axios from "axios";

export const cloudinaryAPI = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/dlapenluj/image'
})
