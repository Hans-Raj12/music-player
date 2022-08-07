import axios from 'axios'
const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientID = "948a6384e0c640ff819eb0147ce30400"
const redirectUrl = "http://localhost:3000"

const scopes = ["user-library-read","playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL:"https://api.spotify.com/v1/",
})

export const setClientToken = (token)=>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer "+token;
        return config;
    })
}

export default apiClient;