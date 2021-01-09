
export type followActionType = {
    type: "FOLLOW"
    userId: number
}
export type unFollowActionType = {
    type: "UNFOLLOW"
    userId: number
}
export type addUsersActionType = {
    type: "ADD_USERS"
    users: Array<UserType>
}

type ActionType = followActionType | unFollowActionType | addUsersActionType

export type initialUserStateType = typeof initialUserState

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: { country: string, city: string }
    photos: { small: string, large: string }
}

let initialUserState = {
    users: [] as Array<UserType>
}

const usersReducer = (state = initialUserState, action: ActionType): initialUserStateType => {

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
            return {...state, users: [...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number): followActionType => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unFollowAC = (userId: number): unFollowActionType => {
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