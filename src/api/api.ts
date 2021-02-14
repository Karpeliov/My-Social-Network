import axios from "axios";
import {AuthLoginType} from "../Components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "1143676e-9d4d-40a0-840d-de43f38528fd"
    }
})

type GetUsersType = {
    "items": Array<{
        "name": string
        "id": number
        "photos": {
            "small": string | null
            "large": string | null
        },
        "status": string
        "followed": boolean
    }>

    "totalCount": number
    "error": null
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(r => r.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(r => r.data)
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(r => r.data)
    },

    setUserProfile(userId: number) {
        // return instance.get(`profile/` + userId)
        return profileAPI.setUserProfile(userId)

    }
}

export const profileAPI = {

    setUserProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status} )
    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(r => r.data)
    },
    //
    // login(email: string, password: string, rememberMe: boolean) {
    //     return instance.post(`auth/login/`, {email, password, rememberMe})
    //         .then(r => r.data)
    // },
    login(loginData: AuthLoginType) {
        return instance.post(`auth/login/`, {loginData})
            .then(r => r.data)
    },


}



