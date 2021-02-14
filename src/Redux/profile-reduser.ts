import {profileAPI, usersAPI} from "../api/api";
import {DispatchType} from "./redux-store";

export type ProfileType = typeof initialProfileState.profile

export type AddNewPostActionType = {
    type: "ADD_NEW_POST"
    postMessage: string
}

export type SetUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}

export type SetStatusType = {
    type: "SET_STATUS"
    status: string
}

type ActionType = AddNewPostActionType | SetUserProfileType | SetStatusType

export type PostTextType = {
    id: number
    message: string
    likeCounts: number

}


export type initialProfileStateType = typeof initialProfileState

let initialProfileState = {
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: ""
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 2,
        photos: {
            small: "",
            large: ""
        },

    },
    posts: [
        {id: 1, message: 'WHY DO WE FALL? SO THAT WE CAN LEARN TO PICK OURSELVES BACK UP.', likeCounts: 12},
        {
            id: 2,
            message: 'YOU EITHER DIE A HERO, OR LIVE LONG ENOUGH TO SEE YOURSELF BECOME A VILLAIN.',
            likeCounts: 20
        },
        {
            id: 3,
            message: 'THE NIGHT IS DARKEST JUST BEFORE THE DAWN. AND I PROMISE YOU, THE DAWN IS COMING.',
            likeCounts: 1000
        },
    ] as Array<PostTextType>,
    status: ""
}

export const profileReducer = (state = initialProfileState, action: ActionType): initialProfileStateType => {

    switch (action.type) {
        case "ADD_NEW_POST":
            return {
                ...state,
                posts: [{id: 4, message: action.postMessage, likeCounts: 0}, ...state.posts]
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }

        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
    }
    return state
}

export const addNewPost = (postMessage: string): AddNewPostActionType => {
    return {
        type: "ADD_NEW_POST",
        postMessage: postMessage
    }
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {
        type: "SET_USER_PROFILE",
        profile
    }
}

export const getUserProfile = (userId: number) => {
    return (dispatch: DispatchType) => {
        usersAPI.setUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    }
}

export const getUserStatus = (userId: number) => {
    return (dispatch: DispatchType) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: DispatchType) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer