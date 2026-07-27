import axios from "axios"
//these functions will help Frontend to interact with those 4 APIs created in Backend(routes.js)


const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export async function register({ email, password, username }) {
    const response = await api.post("/api/auth/register", {
        email, password, username
    })

    return response.data
}

export async function login({ email, username, password }) {
    const response = await api.post("/api/auth/login", {
        email, username, password
    })

    return response.data
}

export async function getMe() {
    const response = await api.get("/api/auth/get-me")
    return response.data
}

export async function logout() {
    const response = await api.get("/api/auth/logout")
    return response.data
}