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

type ActionType = followActionType | unFollowActionType
    | addUsersActionType | setCurrentPageType | setTotalUsersCountType
    | toggleIsFetchingType

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
    isFetching: false
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
        default:
            return state
    }
}

export const follow = (userId: number): followActionType => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unFollow = (userId: number): unFollowActionType => {
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

export default usersReducer