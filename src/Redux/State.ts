import {dialogsType} from "../Components/Dialogs/DialogItem/DialogItem";
import {MessPropsType} from "../Components/Dialogs/Messages/Messages";
import {PostTextType} from "../Components/Profile/MyPosts/MyPosts";
import {friendsPropsType, friendsType} from "../Components/Navbar/Friends/Friends";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";


export type profilePageType = {
    posts: Array<PostTextType>

}
export type MessType = {
    id: number
    message: string
    isMine: boolean
}

export type dialogsPageType = {
    messages: Array<MessType>
    dialogs: Array<dialogsType>
}

export type sideBarType = {
    friends: Array<friendsType>

}

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sideBar: sideBarType

}

export type storeType = {
    _state: stateType
    addNewPost: (postMessage: string) => void
    addNewMessage: (message: string, isMine: boolean) => void
    _RenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: MainActionType) => void
    // dispatch: (action: any) => void
}
export type MainActionType = AddNewPostActionType | AddNewMessageActionType

export type AddNewPostActionType = {
    type: "ADD_NEW_POST"
    postMessage: string
}

export type AddNewMessageActionType = {
    type: "ADD_NEW_MESSAGE"
    message: string
    isMine: boolean
}

let store: storeType = {

    _state: {
        profilePage: {
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
            ],

        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi there!", isMine: false},
                {id: 2, message: "Where are you?", isMine: false},
                {id: 3, message: "How do you feel?", isMine: false},

            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Catwoman',
                    diaAva: "https://pbs.twimg.com/profile_images/378800000615400243/b474e9507557fccf77744a50ecf37a69.jpeg"
                },
                {
                    id: 2,
                    name: 'Harly',
                    diaAva: "https://pbs.twimg.com/profile_images/644961549614870528/z2V9HZE5_400x400.jpg"
                },
                {
                    id: 3,
                    name: 'Two-Face',
                    diaAva: "https://pbs.twimg.com/profile_images/687223253794975745/p9uL7dIS.jpg"
                },
                {id: 4, name: 'Penguin', diaAva: "https://www.shareicon.net/data/2016/01/05/233521_penguin_256x256.png"}
            ],
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    frndName: "Catwomen",
                    frndAva: "https://pbs.twimg.com/profile_images/378800000615400243/b474e9507557fccf77744a50ecf37a69.jpeg"
                },
                {
                    id: 2,
                    frndName: "Two-Face",
                    frndAva: "https://pbs.twimg.com/profile_images/687223253794975745/p9uL7dIS.jpg"
                },
                {
                    id: 3,
                    frndName: "Harly",
                    frndAva: "https://pbs.twimg.com/profile_images/644961549614870528/z2V9HZE5_400x400.jpg"
                },

            ]
        }

    },
    _RenderEntireTree() {
    },
    subscribe(observer: () => void) {
        this._RenderEntireTree = observer // observer -- паттерн, read more later!
    },

    addNewPost(postMessage: string) {
        let newPost: PostTextType;
        newPost = {id: 4, message: postMessage, likeCounts: 0};
        this._state.profilePage.posts.unshift(newPost)
        this._RenderEntireTree()
    },

    addNewMessage(message: string, isMine: boolean) {
        let newMessage: MessType;
        newMessage = {id: 1, message: message, isMine: isMine};
        this._state.dialogsPage.messages.push(newMessage)
        this._RenderEntireTree()
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._RenderEntireTree()
    },

    getState() {
        return this._state
    }

}

export const addNewPostAC = (postMessage: string): AddNewPostActionType => {
   return {
       type: "ADD_NEW_POST",
       postMessage: postMessage
   }
}

export default store;

//старый стэйт
// let state: stateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'WHY DO WE FALL? SO THAT WE CAN LEARN TO PICK OURSELVES BACK UP.', likeCounts: 12},
//             {
//                 id: 2,
//                 message: 'YOU EITHER DIE A HERO, OR LIVE LONG ENOUGH TO SEE YOURSELF BECOME A VILLAIN.',
//                 likeCounts: 20
//             },
//             {
//                 id: 3,
//                 message: 'THE NIGHT IS DARKEST JUST BEFORE THE DAWN. AND I PROMISE YOU, THE DAWN IS COMING.',
//                 likeCounts: 1000
//             },
//         ],
//
//     },
//     dialogsPage: {
//         messages: [
//             {id: 1, message: "Hi there!", isMine: false},
//             {id: 2, message: "Where are you?", isMine: false},
//             {id: 3, message: "How do you feel?", isMine: false},
//
//         ],
//         dialogs: [
//             {
//                 id: 1,
//                 name: 'Catwoman',
//                 diaAva: "https://pbs.twimg.com/profile_images/378800000615400243/b474e9507557fccf77744a50ecf37a69.jpeg"
//             },
//             {
//                 id: 2,
//                 name: 'Harly',
//                 diaAva: "https://pbs.twimg.com/profile_images/644961549614870528/z2V9HZE5_400x400.jpg"
//             },
//             {id: 3, name: 'Two-Face', diaAva: "https://pbs.twimg.com/profile_images/687223253794975745/p9uL7dIS.jpg"},
//             {id: 4, name: 'Penguin', diaAva: "https://www.shareicon.net/data/2016/01/05/233521_penguin_256x256.png"}
//         ],
//     },
//     sideBar: {
//         friends: [
//             {
//                 id: 1,
//                 frndName: "Catwomen",
//                 frndAva: "https://pbs.twimg.com/profile_images/378800000615400243/b474e9507557fccf77744a50ecf37a69.jpeg"
//             },
//             {
//                 id: 2,
//                 frndName: "Two-Face",
//                 frndAva: "https://pbs.twimg.com/profile_images/687223253794975745/p9uL7dIS.jpg"
//             },
//             {
//                 id: 3,
//                 frndName: "Harly",
//                 frndAva: "https://pbs.twimg.com/profile_images/644961549614870528/z2V9HZE5_400x400.jpg"
//             },
//
//         ]
//     }
//
// }
//
// export function addNewPost(postMessage: string) {
//     let newPost: PostTextType;
//     newPost = {id: 4, message: postMessage, likeCounts: 0};
//     state.profilePage.posts.unshift(newPost)
//     RenderEntireTree()
// }
//
// export function addNewMessage(message: string, isMine: boolean) {
//     let newMessage: MessType;
//     newMessage = {id: 1, message: message, isMine: isMine};
//     state.dialogsPage.messages.push(newMessage)
//     RenderEntireTree()
// }
//
// export const subscribe = (observer: () => void) => {
//     RenderEntireTree = observer // observer -- паттерн, read more later!
// }
//
// export default state;
