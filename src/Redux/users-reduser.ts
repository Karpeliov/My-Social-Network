import {usersAPI} from "../api/api";
import {DispatchType} from "./redux-store";

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
export type setCurrentPageType = {
    type: "SET_CURRENT_PAGE"
    pageNumber: number
}
export type setTotalUsersCountType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}
export type toggleIsFetchingType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export type toggleFollowingProgressType = {
    type: "TOGGLE_FOLLOWING_PROGRESS"
    isFetching: boolean
    userId: number
}

type ActionType = followActionType | unFollowActionType
    | addUsersActionType | setCurrentPageType | setTotalUsersCountType
    | toggleIsFetchingType | toggleFollowingProgressType

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
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [0]
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
            //return {...state, users: [...action.users]}
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.pageNumber}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId: number): followActionType => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unFollowSuccess = (userId: number): unFollowActionType => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const addUsers = (users: Array<UserType>): addUsersActionType => {
    return {
        type: "ADD_USERS",
        users
    }
}
export const setCurrentPage = (pageNumber: number): setCurrentPageType => {
    return {
        type: "SET_CURRENT_PAGE",
        pageNumber
    }
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => {
    return {
        type: "SET_TOTAL_USERS_COUNT",
        totalUsersCount
    }
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => {
    return {
        type: "TOGGLE_FOLLOWING_PROGRESS",
        isFetching,
        userId
    }
}

// Thunk Creators
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: DispatchType) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(addUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: DispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: DispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export default usersReducer