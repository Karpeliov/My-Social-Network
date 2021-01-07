import {v1} from "uuid"
import {PostTextType} from "./profile-reduser";

export type followActionType = {
    type: "FOLLOW"
    userId: string
}
export type unFollowActionType = {
    type: "UNFOLLOW"
    userId: string
}
export type addUsersActionType = {
    type: "ADD_USERS"
    users: Array<UserType>
}

type ActionType = followActionType | unFollowActionType | addUsersActionType

export type initialUserStateType = typeof initialUserState

export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: { country: string, city: string }
    photoURL: string
}

let initialUserState = {
    users: [] as Array<UserType>
}

const usersReducer = (state: initialUserStateType = initialUserState, action: ActionType): initialUserStateType => {

    switch (action.type) {

        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    return (u.id === action.userId) ? {...u, followed: true} : u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    return (u.id === action.userId) ? {...u, followed: false} : u
                })
            }
        case "ADD_USERS": {
             return {...state, users: [...state.users, ...action.users]} // так добавляет юзеров из Users 2 раза
            // return {...state, users: [ ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: string): followActionType => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unFollowAC = (userId: string): unFollowActionType => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}

export const addUsersAC = (users: Array<UserType>): addUsersActionType => {
    return {
        type: "ADD_USERS",
        users: users
    }
}
export default usersReducer