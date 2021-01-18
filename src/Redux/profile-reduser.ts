export type ProfileType = typeof initialProfileState.profile

export type AddNewPostActionType = {
    type: "ADD_NEW_POST"
    postMessage: string
}

export type SetUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}

type ActionType = AddNewPostActionType | SetUserProfileType

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
        }
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
    ] as Array<PostTextType>
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

export default profileReducer