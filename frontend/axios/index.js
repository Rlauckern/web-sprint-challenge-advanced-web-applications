// ✨ implement axiosWithAuth
import axios from 'axios'
// ✨ implement axiosWithAuth

export default function axiosWithAuth() {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token
        }
    })
}