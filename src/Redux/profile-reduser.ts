export type AddNewPostActionType = {
    type: "ADD_NEW_POST"
    postMessage: string
}
type ActionType = AddNewPostActionType

export const addNewPostAC = (postMessage: string): AddNewPostActionType => {
    return {
        type: "ADD_NEW_POST",
        postMessage: postMessage
    }
}



export type PostTextType = {
    id: number
    message: string
    likeCounts: number

}


 export type initialProfileStateType = typeof initialProfileState

let initialProfileState = {
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

export const profileReducer = (profileState = initialProfileState, action: ActionType): initialProfileStateType => {
    if (action.type === "ADD_NEW_POST") {
        return {
            ...profileState,
            posts: [{id: 4, message: action.postMessage, likeCounts: 0}, ...profileState.posts]
        }
    }
    return profileState
}

export default profileReducer