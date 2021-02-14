import {DispatchType} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type initialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth?: boolean
    // isFetching: boolean
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
    payload: initialStateType
}

type ActionType = SetUserDataActionType

const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            }
    }


    return state
}

export const setAuthUserData = (userId: null | number, email: null | string, login: null | string, isAuth: boolean): SetUserDataActionType => {
//export const setAuthUserData = (data: initialStateType): SetUserDataActionType => {
    return {
        type: "SET_USER_DATA",
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuth = () => {
    return (dispatch: DispatchType) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })

    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: DispatchType) => {

        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
               let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}

export const logOut = () => {
    return (dispatch: DispatchType) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer