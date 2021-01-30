import {DispatchType} from "./redux-store";
import {authAPI} from "../api/api";

export type initialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth?: boolean
    // sFetching: boolean
}

// export type initialSideBarState = typeof initialState

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
}

export type SetUserDataActionType = {
    type: "SET_USER_DATA"
    data: initialStateType
}

type ActionType = SetUserDataActionType

const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                 isAuth: true
                // для проверки
                // isAuth: false
            }
    }


    return state
}

export const setAuthUserData = (userId: null | number, email: null | string, login: null | string): SetUserDataActionType => {
//export const setAuthUserData = (data: initialStateType): SetUserDataActionType => {
    return {
        type: "SET_USER_DATA",
        data: {
            userId,
            email,
            login
        }

    }
}

export const getAuth = () => {
    return (dispatch: DispatchType) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })

    }
}

export default authReducer