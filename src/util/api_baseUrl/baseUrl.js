import axios from 'axios';
import Cookies from 'js-cookie';

export const api=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.request.use((config)=>{
    const token = Cookies.get('user-blog-token')
    if (token) {
        config.headers.Authorization=`Bearar ${token}`
    }
    return config
})
